<template>
  <div class="homePage content relative">
    <HeroImage />
    <div class="container max-w-screen-lg m-auto">
      <div class="container mt-6 border-2 border-primary rounded mobile-full bg-primary-100">
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
        class="container border-2 mt-4 border-primary rounded mobile-full bg-primary-100"
      >
        <h1 class="font-mono font-bold text-3xl pt-4 pl-4">Projects</h1>
        <p>Videogame Affordances Corpus</p>
      </div>
      <div
        id="technologies"
        class="container border-2 mt-4 border-primary rounded mobile-full bg-primary-100"
      >
        <h1 class="font-mono font-bold text-3xl pt-4 pl-4">Software I Use</h1>
        <p>Code Editor: VS Code</p>
        <p>Python Development: Conda, PyTorch, OpenCV, Numpy, MLFlow, Klein</p>
        <p>Web Deployment: Docker, NGINX, Tailwind CSS</p>
      </div>
    </div>

    <div
      class="container border-2 border-primary rounded mobile-full items-center h-auto flex-wrap my-16"
    >
      <!--Main Col-->
      <div id="profile" class="w-full rounded-lg shadow-2xl bg-primary-100">
        <div class="p-4 text-center">
          <div class="block mx-auto -mt-16 h-48 w-48 lg:w-56 lg:h-56 bg-cover bg-center">
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
          <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-light opacity-50"></div>
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
          <div class="mx-auto lg:mx-0 w-4/5 pt-3 border-b-2 border-light opacity-50"></div>
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
            <a class="link" href="#" data-tippy-content="@twitter_handle">
              <svg
                class="h-6 fill-current text-gray-600 hover:text-light"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>Twitter</title>
                <path
                  d="M23.954 4.569c-.885.389-1.83.654-2.825.775 1.014-.611 1.794-1.574 2.163-2.723-.951.555-2.005.959-3.127 1.184-.896-.959-2.173-1.559-3.591-1.559-2.717 0-4.92 2.203-4.92 4.917 0 .39.045.765.127 1.124C7.691 8.094 4.066 6.13 1.64 3.161c-.427.722-.666 1.561-.666 2.475 0 1.71.87 3.213 2.188 4.096-.807-.026-1.566-.248-2.228-.616v.061c0 2.385 1.693 4.374 3.946 4.827-.413.111-.849.171-1.296.171-.314 0-.615-.03-.916-.086.631 1.953 2.445 3.377 4.604 3.417-1.68 1.319-3.809 2.105-6.102 2.105-.39 0-.779-.023-1.17-.067 2.189 1.394 4.768 2.209 7.557 2.209 9.054 0 13.999-7.496 13.999-13.986 0-.209 0-.42-.015-.63.961-.689 1.8-1.56 2.46-2.548l-.047-.02z"
                />
              </svg>
            </a>
            <a class="link" href="#" data-tippy-content="@github_handle">
              <svg
                class="h-6 fill-current text-gray-600 hover:text-light"
                role="img"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title>GitHub</title>
                <path
                  d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12"
                />
              </svg>
            </a>
            <a class="link" href="#" data-tippy-content="@youtube_handle">
              <svg
                class="h-6 fill-current text-gray-600 hover:text-light"
                role="img"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
              >
                <title>YouTube</title>
                <path
                  d="M23.495 6.205a3.007 3.007 0 0 0-2.088-2.088c-1.87-.501-9.396-.501-9.396-.501s-7.507-.01-9.396.501A3.007 3.007 0 0 0 .527 6.205a31.247 31.247 0 0 0-.522 5.805 31.247 31.247 0 0 0 .522 5.783 3.007 3.007 0 0 0 2.088 2.088c1.868.502 9.396.502 9.396.502s7.506 0 9.396-.502a3.007 3.007 0 0 0 2.088-2.088 31.247 31.247 0 0 0 .5-5.783 31.247 31.247 0 0 0-.5-5.805zM9.609 15.601V8.408l6.264 3.602z"
                />
              </svg>
            </a>
          </div>

          <!-- Use https://simpleicons.org/ to find the svg for your preferred product -->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import navbar from '~/components/NavBar.vue'
// import myFooter from '~/components/Footer.vue'
import HeroImage from "~/components/Sections/HeroImage";
import PostsSection from "~/components/Sections/PostsSection";
import postlist from "~/contents/activeposts.js";

const title = "Gerard Bentley - Software Engineer, AI Researcher";
const description = "Full-Stack Developer based in Southern California.";

export default {
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

  components: {
    HeroImage,
    PostsSection
  },

  transition: {
    name: "slide-fade"
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
  },

  computed: {
    ogImage: function() {
      return require(`~/assets/images/full_bg.jpg`);
    }
  }
};
</script>

<style></style>
