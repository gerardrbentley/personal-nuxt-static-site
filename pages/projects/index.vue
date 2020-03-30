<template>
  <div class="blog-page content relative">
    <div class="w-full h-16 font-bold text-xl bg-dark text-white">
      COMING SOON
    </div>
    <PostsSection :posts="posts" />
  </div>
</template>

<script>
import PostsSection from "~/components/Sections/PostsSection";
import postlist from "~/contents/activeposts.js";

const title = "Gerard Bentley - Lost Crumbs";
const description = "Full-Stack Development and Daily Computing Blog.";

export default {
  components: {
    PostsSection
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
