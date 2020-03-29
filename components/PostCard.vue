<template>
  <li class="post">
    <nuxt-link :to="'/posts/' + post.name">
      <ImageResponsive
        :imageURL="`posts/${post.id}/_thumbnail.jpg`"
        :classes="'cardThumbnail'"
        :width="'952'"
        :height="'509'"
        :alt="post.cardAlt"
      />
      <h3 class="post__title">
        {{ post.title }}
      </h3>
      <p class="post__description">
        {{ post.description }}
      </p>
    </nuxt-link>
  </li>
</template>

<script lang="js">
export default {
  props: {
    post: {
      type: Object
    }
  }
}
</script>

<style lang="scss">
.cardThumbnail {
  transition: all ease 0.75s;
  opacity: 0.7;
  &[lazy="loaded"] {
    opacity: 1;
  }
}
.blog {
  &:sm {
    padding-bottom: 0;

    &:last-child {
      margin-right: 0;
    }
  }

  &:hover {
    .blog__title {
      @apply text-primary;
    }
  }

  &__title {
    font-family: "Tiempos Headline", Arial, sans-serif;
    @apply text-dark;
    padding-top: 1rem;
    font-size: 2.5rem;
    transition: color 0.3s;
  }

  &__description {
    margin: 0;
    @apply text-gray-200;
  }
}
</style>
