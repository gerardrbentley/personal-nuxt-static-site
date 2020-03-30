const path = require("path");
const builtAt = new Date().toISOString();
import axios from "axios";
import pkg from "./package";
import posts from "./contents/activeposts.js";

const { CI_PAGES_URL } = process.env;
const baseUrl = CI_PAGES_URL && new URL(CI_PAGES_URL).pathname;

export default {
  mode: "universal",
  /*
   ** Headers of the page
   */
  head: {
    title: `Gerard Bentley's Lost Crumbs`,
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
    // '@nuxtjs/eslint-module',
    // Doc: https://github.com/nuxt-community/nuxt-tailwindcss
    "@nuxtjs/tailwindcss"
  ],
  /*
   ** Nuxt.js modules
   */
  modules: ["@nuxtjs/axios", "@nuxtjs/svg", "vue-scrollto/nuxt"],

  // styleResources: {
  //   scss: [
  //     "@/assets/css/utilities/_variables.scss",
  //     "@/assets/css/utilities/_helpers.scss",
  //     "@/assets/css/base/_grid.scss",
  //     "@/assets/css/base/_buttons.scss"
  //   ]
  // },
  /*
   ** Build configuration
   */
  build: {
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {
      const rule = config.module.rules.find(
        (r) => r.test.toString() === "/\\.(png|jpe?g|gif|svg|webp)$/i"
      );
      config.module.rules.splice(config.module.rules.indexOf(rule), 1);

      config.module.rules.push(
        {
          test: /\.md$/,
          loader: "frontmatter-markdown-loader",
          include: path.resolve(__dirname, "contents"),
          options: {
            vue: {
              root: "dynamicMarkdown"
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
