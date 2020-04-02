<template lang="html">
  <div
    v-lazy-container="{ selector: 'img' }"
    :class="`image-placeholder ${isRounded}`"
  >
    <img
      class="opacity-0 transition-all duration-300 ease-out"
      :data-src="imageRequired"
      :data-loading="imageRequired.placeholder"
      :width="width"
      :height="height"
      :class="classes"
      :alt="alt"
    />
  </div>
</template>

<script>
export default {
  props: {
    imageURL: {
      type: String,
      default: () => "wide_bg.jpg"
    },
    alt: {
      type: String,
      default: () => "Error Loading"
    },
    width: {
      type: String,
      default: () => "600"
    },
    height: {
      type: String,
      default: () => "600"
    },
    classes: {
      type: String,
      default: () => ""
    },
    rounded: {
      type: Boolean,
      default: false
    }
  },
  computed: {
    imageRequired() {
      return require(`../assets/images/${this.imageURL}`);
    },
    isRounded() {
      return this.rounded ? "image-placeholder--rounded" : "";
    }
  }
};
</script>

<style scoped lang="scss">
.image-placeholder {
  overflow: hidden;
  line-height: 0;

  &--rounded {
    border-radius: 100%;
  }
}

img {
  &[lazy="loading"] {
    opacity: 1;
    filter: blur(15px);
  }
  &[lazy="loaded"] {
    opacity: 1;
  }
}
</style>
