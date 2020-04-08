<template>
  <div class="blog-page content relative">
    <div class="mt-12 w-full h-32 font-bold text-xl bg-dark text-white">
      <p>COMING SOON</p>
      <a href="/vgac/expert.html" class="link">VGAC Expert Tagging Demo</a>
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
