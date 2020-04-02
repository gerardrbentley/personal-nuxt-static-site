const path = require("path");
const builtAt = new Date().toISOString();

const { CI_PAGES_URL } = process.env;
const baseUrl = CI_PAGES_URL && new URL(CI_PAGES_URL).pathname;

import Mode from "frontmatter-markdown-loader/mode";
import MarkdownIt from "markdown-it";
import mip from "markdown-it-prism";

const md = new MarkdownIt({
  html: true,
  typographer: true
});
md.use(mip);

// function getPaths(lang, type) {
//   let initial = lang;
//   if (lang === "en") {
//     initial = "";
//   }
//   return fs
//     .readdirSync(path.resolve(__dirname, "contents", `${type}`))
//     .filter(filename => path.extname(filename) === ".md")
//     .map(filename => `${initial}/${type}/${path.parse(filename).name}`);
// }

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: "Gerard Bentley's Lost Crumbs",
    meta: [
      { charset: "utf-8" },
      {
        name: "viewport",
        content:
          "width=device-width, initial-scale=1.0,minimum-scale=1.0,maximum-scale=1.0,user-scalable=no"
      },
      { name: "theme-color", content: "#c1c1c1" },
      { name: "robots", content: "index, follow" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@marinaaisa" },
      { property: "og:type", content: "profile" },
      { property: "og:updated_time", content: builtAt },
      {
        hid: "description",
        name: "description",
        content: process.env.npm_package_description || ""
      }
    ],
    link: [
      { rel: "icon", type: "image/x-icon", href: "/favicons/favicon.ico" },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicons/favicon-16x16.png",
        sizes: "16x16"
      },
      {
        rel: "icon",
        type: "image/png",
        href: "/favicons/favicon-32x32.png",
        sizes: "32x32"
      }
    ]
  },
  /*
   ** Customize the progress-bar color
   */
  loading: {
    color: "#710710",
    height: "3px"
  },
  /*
   ** Global CSS
   */
  css: [
    "normalize.css/normalize.css"
    // '@/assets/css/main.scss'
  ],
  /*
   ** Plugins to load before mounting the App
   */
  plugins: [
    "~/plugins/lazyload",
    "~/plugins/globalComponents",
    { src: "~/plugins/vue-pdf.js", ssr: false }
  ],
  /*
   ** Nuxt.js dev-modules
   */
  buildModules: [
    // Doc: https://github.com/nuxt-community/eslint-module
    "@nuxtjs/eslint-module",
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@chrisbielak/svg-module", "vue-scrollto/nuxt"],

  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config) {
      const rule = config.module.rules.find(
        r => r.test.toString() === "/\\.(png|jpe?g|gif|svg|webp)$/i"
      );
      config.module.rules.splice(config.module.rules.indexOf(rule), 1);

      config.module.rules.push(
        {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          include: path.resolve(__dirname, "contents"),
          options: {
            mode: [Mode.VUE_RENDER_FUNCTIONS, Mode.VUE_COMPONENT],
            vue: {
              root: "dynamicMarkdown"
            },
            markdown(body) {
              return md.render(body);
            }
          }
        },
        {
          test: /\.(jpe?g|png)$/i,
          loader: "responsive-loader",
          options: {
            placeholder: true,
            quality: 60,
            size: 1400,
            adapter: require("responsive-loader/sharp")
          }
        },
        {
          test: /\.(gif)$/,
          loader: "url-loader",
          query: {
            limit: 1000,
            name: "img/[name].[hash:7].[ext]"
          }
        }
      );
    }
  },
  /*
   ** Static Site Generation Settings
   */
  generate: {
    dir: "public",
    devtools: true
  },
  router: {
    baseUrl,
    extendRoutes(routes, resolve) {
      routes.push({
        name: "custom",
        path: "*",
        component: resolve(__dirname, "pages/404.vue")
      });
    }
  }
};
