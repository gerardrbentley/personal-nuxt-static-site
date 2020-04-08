<template>
  <div class="blog-page content relative">
    <div class="mt-12 w-full h-32 font-bold text-xl bg-dark text-white">
      <p>COMING SOON</p>
    </div>
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
  </div>
</template>

<script>
const title = "Gerard Bentley - Lost Crumbs";
const description = "Personal Projects.";

export default {
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
