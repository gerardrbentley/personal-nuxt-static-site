<template>
  <li class="post">
    <nuxt-link 
      :to="'/posts/'+post.name"
    >
      <ImageResponsive
        :imageURL="`posts/${post.id}/_thumbnail.jpg`"
        :classes="'cardThumbnail'"
        :width="'952'"
        :height="'509'"
        :alt="post.cardAlt" />
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
    transition: all ease .75s;
    opacity: .7;
    &[lazy='loaded'] {
      opacity: 1;
    }
  }
  .blog {

    @media (min-width: $screen-sm){
      padding-bottom: 0;

      &:last-child {
        margin-right: 0;
      }
    }

    &:hover {
      .blog__title {
        color: $primary;
      }
    }

    &__title {
      font-family: 'Tiempos Headline', Arial, sans-serif;
      color: $secondary;
      padding-top: 1rem;
      font-size: 2.5rem;
      transition: color .3s;
    }

    &__description {
      margin: 0;
      color: $grey-2;
    }
  }
</style>
