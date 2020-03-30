<template>
  <div class="layout">
    <NavBar :nav-open="openNav" @toggle-nav-bar="navIsOpen = !openNav" />
    <nuxt class="nuxt-content" :class="{ 'pt-12': openNav }" />
    <Footer />
  </div>
</template>

<script>
import NavBar from "~/components/Sections/NavBar.vue";

import Footer from "~/components/Sections/Footer.vue";

export default {
  components: {
    NavBar,
    Footer
  },
  data: function() {
    return {
      navIsOpen: true
    };
  },
  computed: {
    openNav: function() {
      return this.navIsOpen;
    }
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
  @apply bg-primary-50 h-full overflow-x-hidden px-0;
  min-width: 320px;
  transition: transform 0.5s ease-out;
}

.shape {
  @apply w-full max-h-full;
}

.mobile-full {
  @apply w-full mx-auto;
}

@screen sm {
  .mobile-full {
    @apply w-11/12;
  }
}

li,
ul {
  list-style-type: none;
}

p {
  @apply pl-6 py-4 leading-relaxed text-2xl;
}

h1 {
  @apply text-5xl my-0;
}

h2 {
  @apply text-4xl;
}

h3 {
  @apply pl-6 py-4 text-3xl;
}
</style>
