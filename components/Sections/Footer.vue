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
            class="link hover:animated-link"
            ><span>Gerard Bentley</span></a
          >
          using
          <a
            target="_blank"
            href="https://vuejs.org/"
            class="link hover:animated-link"
            ><span>Vue</span></a
          >
          +
          <a
            target="_blank"
            href="https://nuxtjs.org/"
            class="link hover:animated-link"
            ><span>Nuxt JS</span></a
          >,
          <a
            target="_blank"
            href="https://tailwindcss.com/"
            class="link hover:animated-link"
            ><span>Tailwind CSS</span></a
          >, and
          <a
            target="_blank"
            href="https://docs.gitlab.com/ee/user/project/pages/"
            class="link hover:animated-link"
            ><span>Gitlab Pages</span></a
          >.
          <a
            target="_blank"
            href="https://gitlab.com/gerardrbentley/gerardrbentley.gitlab.io"
            class="link hover:animated-link"
            ><span>View Source Code</span></a
          ></span
        >
      </div>
      <a
        v-scroll-to="{
          el: '#__layout',
          duration: 800,
          offset: -200
        }"
        href="#"
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
