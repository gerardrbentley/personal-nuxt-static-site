<template>
  <div class="section mb-10 md:mb-24">
    <div class="posts__top flex justify-between flex-start mt-4">
      <div>
        <h2>Posts so far...</h2>
      </div>
    </div>
    <ul class="posts m-0 grid grid-cols-1 md:grid-cols-2 gap-4">
      <post-card
        v-for="post in posts"
        :key="post.name"
        :post="post" />
    </ul>
  </div>
</template>
<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: { PostCard },
  props: {
    posts: {
      type: Array
    }
  }
}
</script>
<style lang="scss">
.posts {
  margin: 0;

  &__top {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-top: 4rem;
  }
}
</style>

