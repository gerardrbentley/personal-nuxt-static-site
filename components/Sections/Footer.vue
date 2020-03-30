<template>
  <footer>
    <div
      class="footer bot-0 h-auto flex justify-between items-center bg-dark rounded-t shadow-2xl"
    >
      <div class="copyright flex-auto text-xl text-white pl-4 pr-3 py-2">
        © {{ year }} —
        <span>
          Made by
          <a
            target="_blank"
            href="https://twitter.com/GarsBar35Plus"
            class="text-white"
            ><span>Gerard Bentley</span></a
          >
          using Vue + Nuxt JS, Tailwind CSS, and Gitlab Pages.
          <a
            target="_blank"
            href="https://gitlab.com/gerardrbentley/gerardrbentley.gitlab.io"
            class="text-mono text-white"
            ><span>Source Code</span></a
          ></span
        >
      </div>
      <a
        href="#"
        v-scroll-to="{
          el: '#__layout',
          duration: 800,
          offset: -200
        }"
        class="transform smooth-3 fadeIn75 z-50 rounded-full bg-white text-gray-700 hover:bg-gray-400 hover:shadow-outline hover:text-gray-900 mr-4 mb-1 flex-shrink-0"
      >
        <Arrow class="transform smooth-5 fill-current -m-1" />
      </a>
    </div>
  </footer>
</template>
<script>
import Arrow from "~/assets/icons/arrow_drop_up_black.svg?inline";

export default {
  components: {
    Arrow
  },
  computed: {
    year() {
      return new Date().getFullYear();
    }
  }
};
</script>

<style></style>
