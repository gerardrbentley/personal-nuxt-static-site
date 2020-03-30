<template>
  <div class="section mobile-full mb-10 lg:mb-24">
    <div class="posts__top flex justify-between flex-start mt-4">
      <div>
        <h2 class="text-mono">Posts so far...</h2>
      </div>
    </div>
    <ul class="posts mobile-full grid grid-cols-1 lg:grid-cols-2 gap-4">
      <PostCard v-for="post in posts" :key="post.name" :post="post" />
    </ul>
  </div>
</template>
<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: { PostCard },
  props: {
    posts: {
      type: Array,
      default: () => []
    }
  }
};
</script>
<style></style>
