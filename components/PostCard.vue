<template>
  <li class="post border border-dark shadow-lg hover:shadow-2xl bg-primary-100 p-4">
    <NuxtLink :to="'/posts/' + post.name">
      <ImageResponsive
        :imageURL="`posts/${post.id}/_thumbnail.jpg`"
        :classes="'cardThumbnail'"
        :width="'952'"
        :height="'509'"
        :alt="post.cardAlt"
      />
      <h3 class="title">{{ post.title }}</h3>
      <p class="description">{{ post.description }}</p>
    </NuxtLink>
  </li>
</template>

<script>
export default {
  props: {
    post: {
      type: Object
    }
  }
};
</script>

<style lang="scss">
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy="loaded"] {
    opacity: 1;
  }
}
</style>
