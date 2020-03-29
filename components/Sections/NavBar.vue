<template>
  <div class="myNav">
    <button
      class="transform smooth-3 fadeIn75 z-50 fixed rounded-full bg-white text-gray-700 hover:bg-gray-400 hover:shadow-outline hover:text-gray-900 ml-4 mt-1"
      v-on:click="$emit('toggle-nav-bar')"
    >
      <DoubleArrow
        v-bind:class="{ 'rotate-90': !isNavOpen, '-rotate-90': isNavOpen }"
        class="transform smooth-5 fill-current -m-1"
      />
    </button>
    <nav
      v-bind:class="{ hidden: !isNavOpen }"
      class="navBar z-40 fixed flex justify-between flex-wrap lg:flex-no-wrap w-full bg-dark h-12 shadow-lg lg:rounded-b pl-4"
    >
      <div class="navLogo flex items-center flex-shrink-0 mr-6 ml-16">
        <NuxtLink
          to="/"
          class="navLink btn-dark hover:emphasis-primary rounded-lg border-2 block sm:hidden "
          >GBentley</NuxtLink
        >
        <NuxtLink
          to="/"
          class="navLink btn-dark hover:emphasis-primary rounded-lg border-2 hidden sm:block "
          >Gerard Bentley: Lost Crumbs</NuxtLink
        >
      </div>

      <button
        class="transform smooth-3 fadeIn75 z-50 block lg:hidden rounded-full text-white hover:bg-gray-400 hover:shadow-outline hover:text-gray-100"
        v-on:click="toggleNavLinks"
        v-if="!navLinksOpen"
      >
        <TripleDots class="transform smooth-3 fill-current" />
      </button>
      <button
        class="transform smooth-3 fadeIn75 z-50 block lg:hidden rounded-full text-white hover:bg-gray-400 hover:shadow-outline hover:text-gray-100"
        v-on:click="toggleNavLinks"
        v-if="navLinksOpen"
      >
        <CloseX class="transform smooth-3 fill-current" />
      </button>

      <div
        class="navLinks w-full block flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end"
        v-bind:class="{ hidden: !navLinksOpen }"
      >
        <NuxtLink
          to="/posts"
          class="navLink btn-dark hover:emphasis-primary border-t-2 -ml-4 block"
        >
          Posts
        </NuxtLink>
        <NuxtLink
          to="/projects"
          class="navLink btn-dark hover:emphasis-primary border-t-2 -ml-4 block"
        >
          Projects
        </NuxtLink>
        <NuxtLink
          to="/resources"
          class="navLink btn-dark hover:emphasis-primary border-t-2 -ml-4 block"
        >
          Resources
        </NuxtLink>
        <NuxtLink
          to="/resume"
          class="navLink btn-dark hover:emphasis-primary border-t-2 -ml-4 block"
        >
          Resume
        </NuxtLink>
      </div>
    </nav>
  </div>
</template>

<script>
import DoubleArrow from "~/assets/icons/double_arrow_black.svg?inline";
import TripleDots from "~/assets/icons/dots_vertical.svg?inline";
import CloseX from "~/assets/icons/close_black.svg?inline";

export default {
  components: {
    DoubleArrow,
    TripleDots,
    CloseX
  },
  props: {
    navOpen: {
      type: Boolean,
      default: true
    }
  },
  data: function() {
    return {
      navLinksOpen: false
    };
  },
  computed: {
    isNavOpen: function() {
      return this.navOpen;
    },
    navToggleRotation: function() {
      return this.navOpen ? "transform=rotate(270)" : "transform=rotate(90)";
    },
    showNavLinks: function() {
      return this.navLinksOpen;
    }
  },
  methods: {
    toggleNavLinks: function(event) {
      this.navLinksOpen = !this.navLinksOpen;
    }
  }
};
</script>

<style>
.navLink {
  @apply font-mono;
}
@screen lg {
  .navLink {
    @apply border-2 ml-0 mr-4 my-0 rounded-lg;
  }
}
</style>
