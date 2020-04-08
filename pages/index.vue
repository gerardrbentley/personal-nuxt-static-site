<template>
  <div class="homePage content relative">
    <HeroImage />
    <div class="container max-w-screen-lg m-auto">
      <div
        class="container mt-6 border-2 border-primary rounded mobile-full bg-primary-100"
      >
        <h1 class="font-mono font-bold text-3xl pt-4 pl-4">Welcome!</h1>
        <p>
          Here you can find projects I'm working on, tools that I'm using, and
          hopefully some helpful snippets and pointers.
        </p>

        <p>
          Currently exploring research in computer vision and understanding in
          the domain of Videogames and trying to organize my life against
          Coronavirus.
        </p>
        <p>
          NOTE: This is a work in progress blog, it may veer towards showcasing
          projects, compiling notes and guides, or just being a web playground.
          It'll probably go through frequent updates as I search for work.
        </p>
      </div>
      <PostsSection :posts="posts"></PostsSection>
      <div
        id="projects"
        class="container border-2 my-4 pb-4 border-primary rounded mobile-full h-auto bg-primary-100"
      >
        <h1 class="font-mono font-bold text-3xl pt-4 pl-4">Projects</h1>
        <p>Videogame Affordances Corpus:</p>
        <a
          href="http://www.exag.org/papers/EXAG_2019_paper_13.pdf"
          class="w-full block pl-12 py-4 link hover:animated-link"
          >Link to EXAG '19 Paper</a
        >
        <a
          href="https://docs.google.com/presentation/d/1Mi_hrZH25Q3uPHOX9hnWoV7LaxHCcgC2Dusak9WtQqw/edit?usp=sharing"
          class="w-full block pl-12 py-4 link hover:animated-link"
          >Introduction Slides from talk at Claremont Colleges Digital
          Humanities</a
        >

        <a
          href="/vgac/expert.html"
          class="w-full block pl-12 py-4 link hover:animated-link"
          >Expert Tagger Demo</a
        >
      </div>
      <div
        id="technologies"
        class="container border-2 mt-4 border-primary rounded mobile-full bg-primary-100"
      >
        <h1 class="font-mono font-bold text-3xl pt-4 pl-4">
          Software I've Been Using
        </h1>
        <p>Code Editor: VS Code (+ Google Colab for sharing GPU projects)</p>
        <p>Python Development: Conda, PyTorch, OpenCV, MLFlow, Klein</p>
        <p>Front End Development: Vue + Nuxt JS, Tailwind CSS</p>
        <p>Web Deplyoment: Docker, NGINX, Gitlab CI/CD</p>
      </div>
    </div>

    <div
      class="container border-2 border-primary rounded mobile-full items-center h-auto flex-wrap my-16"
    >
      <!--Main Col-->
      <div id="profile" class="w-full rounded-lg shadow-2xl bg-primary-100">
        <div class="p-4 text-center">
          <div
            class="block mx-auto -mt-16 h-48 w-48 lg:w-56 lg:h-56 bg-cover bg-center"
          >
            <div
              class="headshotImage relative border-primary h-48 w-48 lg:w-56 lg:h-56 border-2 rounded-lg shadow-xl pb-48"
            >
              <img
                class="absolute h-48 w-48 lg:w-56 lg:h-56 rounded-lg object-cover"
                src="~assets/images/gbimage.jpeg"
                alt="Headshot"
              />
            </div>
          </div>

          <h1 class="text-3xl font-bold pt-4">About Me</h1>
          <h2 class="text-2xl font-bold pt-4">Gerard R. Bentley</h2>
          <div
            class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-light opacity-50"
          ></div>
          <p class="pt-4 text-base flex items-center justify-center">
            <svg
              class="h-4 flex-shrink-0 fill-current text-light pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M9 12H1v6a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-6h-8v2H9v-2zm0-1H0V5c0-1.1.9-2 2-2h4V2a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v1h4a2 2 0 0 1 2 2v6h-9V9H9v2zm3-8V2H8v1h4z"
              />
            </svg>
            Most Recently Research / Lab Manager at Pomona College working with
            FAIM Lab.
          </p>
          <p class="text-base flex items-center justify-center">
            <svg
              class="h-4 fill-current text-light pr-4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path
                d="M10 20a10 10 0 1 1 0-20 10 10 0 0 1 0 20zm7.75-8a8.01 8.01 0 0 0 0-4h-3.82a28.81 28.81 0 0 1 0 4h3.82zm-.82 2h-3.22a14.44 14.44 0 0 1-.95 3.51A8.03 8.03 0 0 0 16.93 14zm-8.85-2h3.84a24.61 24.61 0 0 0 0-4H8.08a24.61 24.61 0 0 0 0 4zm.25 2c.41 2.4 1.13 4 1.67 4s1.26-1.6 1.67-4H8.33zm-6.08-2h3.82a28.81 28.81 0 0 1 0-4H2.25a8.01 8.01 0 0 0 0 4zm.82 2a8.03 8.03 0 0 0 4.17 3.51c-.42-.96-.74-2.16-.95-3.51H3.07zm13.86-8a8.03 8.03 0 0 0-4.17-3.51c.42.96.74 2.16.95 3.51h3.22zm-8.6 0h3.34c-.41-2.4-1.13-4-1.67-4S8.74 3.6 8.33 6zM3.07 6h3.22c.2-1.35.53-2.55.95-3.51A8.03 8.03 0 0 0 3.07 6z"
              />
            </svg>
            Claremont, CA, USA (Originally Warren, CT)
          </p>
          <div
            class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-light opacity-50"
          ></div>
          <p class="m-auto w-11/12 text-black">
            I'm a software developer interested in computer vision, web-based
            apps, ethical / explainable AI, and bringing coding to others.
          </p>
          <p class="m-auto w-11/12 text-black">
            I graduated from Pomona College in 2019 with a BA in Computer
            Science, then stuck around for the summer and fall as part of a
            post-bacc research year. Working with professor Joe Osborn we
            authored "The Videogame Affordances Corpus" at EXAG 2019, which was
            the first paper for our 'Formal Analysis of Interactive Media (FAIM)
            Lab'. My work over this year focused mainly on using Machine
            Learning techniques to analyze in-game screenshots from a collection
            of classic action and adventure games. I also spent my time
            developing tools for tagging data for the Computer Vision tasks,
            onboarding and managing tasks for a group of 6-10 undergraduate
            students in the lab, and building and setting up a 3-gpu linux
            workstation for training models.
          </p>
          <p class="p-2 text-black"></p>

          <div
            class="mt-6 pb-16 lg:pb-0 w-4/5 lg:w-full mx-auto flex flex-wrap items-center justify-between"
          >
            <TippySVG
              :svgName="'github_icon'"
              :linkTarget="'https://github.com/gerardrbentley'"
              :text="'@github.com/gerardrbentley'"
            />
            <TippySVG
              :svgName="'gitlab_icon_white'"
              :linkTarget="'https://gitlab.com/gerardrbentley'"
              :text="'@gitlab.com/gerardrbentley'"
            />
            <TippySVG
              :svgName="'twitter'"
              :linkTarget="'https://twitter.com/GarsBar35Plus'"
              :text="'@twitter:GarsBar35Plus'"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import HeroImage from "~/components/Sections/HeroImage";
import PostsSection from "~/components/Sections/PostsSection";
import TippySVG from "~/components/Sections/TippySVG";
import postlist from "~/contents/activeposts.js";

const title = "Gerard Bentley - Software Engineer, AI Researcher";
const description = "Full-Stack Developer based in Southern California.";

export default {
  components: {
    HeroImage,
    PostsSection,
    TippySVG
  },
  async asyncData({ app }) {
    const posts = postlist;

    async function asyncImport(postName) {
      const wholeMD = await import(`~/contents/posts/${postName}.md`);
      return wholeMD.attributes;
    }

    return Promise.all(posts.map(post => asyncImport(post))).then(res => {
      return {
        posts: res
      };
    });
  },

  transition: {
    name: "slide-fade"
  },

  computed: {
    ogImage: function() {
      return require("~/assets/images/full_bg.jpg");
    }
  },

  head() {
    return {
      title: title,
      meta: [
        { name: "author", content: "Gerard Bentley" },
        {
          name: "description",
          property: "og:description",
          content: description,
          hid: "description"
        },
        { property: "og:title", content: title },
        { property: "og:image", content: this.ogImage },
        { name: "twitter:description", content: description },
        { name: "twitter:image", content: this.ogImage }
      ]
    };
  }
};
</script>

<style></style>
