<template>
  <div class="layout">
    <nav-bar
      v-bind:navOpen="openNav"
      v-on:toggle-nav-bar="navIsOpen = !openNav"
    />
    <nuxt class="nuxt-content" v-bind:class="{ 'pt-12': openNav }" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "~/components/Sections/NavBar.vue";

import Footer from "~/components/Sections/Footer.vue";

export default {
  data: function() {
    return {
      navIsOpen: true
    };
  },
  computed: {
    openNav: function() {
      return this.navIsOpen;
    }
  },
  components: {
    NavBar,
    Footer
  }
};
</script>

<style>
html {
  height: 100%;
}

.layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.nuxt-content {
  flex-grow: 1;
}

body {
  @apply bg-primary-50 h-full overflow-x-hidden;
  min-width: 320px;
  transition: transform 0.5s ease-out;
}

@screen sm {
  body {
    @apply px-0;
  }
}

.shape {
  @apply w-full max-h-full;
}

li,
ul {
  list-style-type: none;
}

p {
  @apply pl-4;
}
</style>
