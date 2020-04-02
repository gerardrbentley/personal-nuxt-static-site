<template>
  <div
    class="tooltip-svg relative mx-2 h-10 w-10"
    v-on:mouseover="hover = true"
    v-on:mouseleave="hover = false"
  >
    <span
      class="pointer-events-none bg-black absolute text-white text-md rounded py-1 px-4 left-0 top-0 bottom-full"
      v-bind:class="position"
      v-if="hover"
      v-text="text"
    >
    </span>
    <a target="_blank" v-bind:href="linkTarget" class="h-full w-full">
      <div v-html="svgRaw" v-bind:class="currentClasses"></div>
    </a>
  </div>
</template>
<script>
import gitlabIconWhiteRaw from "~/assets/icons/gitlab_icon_white.svg?raw";
import githubIcon from "~/assets/icons/github_icon.svg?raw";
import twitterIcon from "~/assets/icons/twitter.svg?raw";
import youtubeIcon from "~/assets/icons/youtube.svg?raw";

const dict = {
  gitlab_icon_white: gitlabIconWhiteRaw,
  github_icon: githubIcon,
  twitter: twitterIcon,
  youtube: youtubeIcon
};
export default {
  data() {
    return {
      hover: false,
      iconDict: dict
    };
  },
  props: {
    svgName: {
      type: String,
      default: () => "dots_vertical"
    },
    linkTarget: {
      type: String,
      default: () => "#"
    },
    text: {
      type: String,
      default: () => "a useful tooltip"
    },
    position: {
      type: String,
      default: () => "-my-6"
    },
    classes: {
      type: String,
      default: () => "text-gray-600 hover:text-light"
    }
  },
  computed: {
    svgRaw() {
      return this.iconDict[this.svgName];
    },
    currentClasses() {
      return this.classes;
    },
    isHovered() {
      return this.hover;
    }
  }
};
</script>

<style></style>
