<template>
  <div class="postSelected">
    <div class="blog-header flex flex-col lg:flex-row">
      <div class="elevate-cover__textOffset max-w-screen-sm w-full mx-auto">
        <div class="blog-return left-lg p-2 pl-4 w-full">
          <nuxt-link to="/posts" class="flex items-center justify-start text-primary-600 h-10">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 6 4"
              aria-hidden="true"
              style="width: 16px; height: 12px; transform: rotate(180deg);"
            >
              <polygon
                fill="currentColor"
                points="0 2.33 4.72 2.33 3.53 3.53 4 4 6 2 4 0 3.53 0.47 4.72 1.67 0 1.67 0 2.33"
              />
            </svg>
            <span>Return</span>
          </nuxt-link>
        </div>
        <div class="blog-desc p-6 flex flex-col justify-start items-start lg:items-baseline">
          <span class="postSelected-year pl-2">{{ year }}</span>
          <h1 class="elevate-cover__title">{{ title }}</h1>
          <p class="elevate-cover__description fadeInSlide">{{ description }}</p>
        </div>
      </div>
      <ImageResponsive
        :imageURL="'posts/' + id + '/_main.jpg'"
        v-if="!noMainImage"
        width="100%"
        class="elevate-cover__img"
        :alt="'Post picture'"
      />
      <component v-else class="elevate-cover__img w-full" :is="extraComponentLoader" />
    </div>
    <div class="mainBody">
      <DynamicMarkdown
        :render-func="renderFunc"
        :static-render-funcs="staticRenderFuncs"
        :extra-component="extraComponent"
      />
    </div>
  </div>
</template>

<script lang="js">

import DynamicMarkdown from "~/components/Markdown/DynamicMarkdown.vue"


export default {

  async asyncData ({params, app}) {
    const fileContent = await import(`~/contents/posts/${params.slug}.md`)
    const attr = fileContent.attributes
    return {
      name: params.slug,
      title: attr.title,
      trans: attr.trans,
      year: attr.year,
      id: attr.id,
      owner: attr.owner,
      colors: attr.colors,
      role: attr.role,
      cardAlt: attr.cardAlt,
      noMainImage: attr.noMainImage,
      description: attr.description,
      related: attr.related,
      extraComponent: attr.extraComponent,
      renderFunc: fileContent.vue.render,
      staticRenderFuncs: fileContent.vue.staticRenderFns,
      image: {
        main: attr.image && attr.image.main,
        og: attr.image && attr.image.og
      }
    }
  },

  components: { DynamicMarkdown},

  head () {
    return {
      title: this.pageTitle,
      meta: [
        { name: "author", content: "Gerard Bentley" },
        { name: "description", property: "og:description", content: this.description, hid: "description" },
        { property: "og:title", content: this.pageTitle },
        { property: "og:image", content: this.ogImage },
        { name: "twitter:description", content: this.description },
        { name: "twitter:image", content: this.ogImage }
      ],
      link: [
        this.hreflang
      ]
    };
  },

  transition: {
    name: 'slide-fade'
  },

  computed: {
    ogImage () {
      return `${process.env.baseUrl}/images/posts/${this.id}/_thumbnail.jpg`;
    },
    pageTitle () {
      return this.title + ' – Gerard Bentley';
    },

    extraComponentLoader () {
      if (!this.extraComponent) {
        return null
      }
      return () => import(`~/components/posts/${this.extraComponent}.vue`)
    }
  }
}
</script>

<style lang="scss">
.overflowhidden {
  overflow: hidden;
}
.postSelected-horizontalImage {
  height: 56rem;
  background-size: contain;
  transition: all ease 0.35s;
  opacity: 0;

  &[lazy="loading"] {
    filter: blur(15px);
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
  &[lazy="loaded"] {
    opacity: 1;
    background-repeat: no-repeat !important;
    background-size: contain !important;
  }
  .intro {
    display: flex;
  }
}

.elevate-cover {
  display: flex;
  flex-direction: column;
  min-height: 459px;

  &__left {
    max-width: 500px;
    width: 100%;
    padding: 2.4rem;
    margin-bottom: auto;
  }
  @screen lg {
    .elevate-cover {
      flex-direction: row;
    }
    .elevate-cover__left {
      margin-left: auto;
      padding: 2.4rem 4rem 2.4rem 2.4rem;
    }
  }

  &__textOffset {
    display: flex;
    flex-direction: column;
    align-items: center;
  }

  &__title {
    font-size: 3rem;
    font-family: "Tiempos Headline", Arial, sans-serif;
    @apply text-dark;
    &:md {
      font-size: 4rem;
    }
  }

  &__description {
    margin: 0;
    opacity: 0;
    animation: fadeinmove 0.5s ease;
    animation-delay: 0.5s;
    animation-fill-mode: forwards;
  }
}
.dynamicMarkdown {
  padding: 3.2rem 0;
  font-size: 16px;
  line-height: 1.7;
  @apply text-dark;

  > *:not(.datagrid):not(.image-placeholder) {
    max-width: 700px;
    margin-left: auto;
    margin-right: auto;
    display: block;
  }

  &:md {
    padding: 7.2rem 0;
    font-size: 19px;
  }

  h2 {
    padding-bottom: 3.2rem;
    padding-bottom: 2rem;

    font-size: 2rem;
  }

  h3 {
    font-size: 2.2rem;
    padding-bottom: 2rem;
  }

  li {
    list-style-type: initial;
  }

  pre {
    box-shadow: 0 4px 12px 0 rgba(0, 0, 0, 0.05);
    padding: 2.4rem;
    border-radius: 4px;
    background-color: #f6f8fa;
    overflow-x: scroll;
    display: block;
    margin-bottom: 5rem;

    code {
      background-color: #f6f8fa;
    }
  }

  code {
    background: #f3f4f4;
    border-radius: 4px;
    display: inline;
    @apply text-dark;
    font-size: 14px;
    padding: 0.2em 0.4em;

    &:md {
      font-size: 16px;
    }
  }
}
</style>
