<template>
  <div class="heroImage">
  <div class="flex justify-center content-center bg-gray-600">
      
    <a
      href='/images/full_bg.jpg'
    >
      <ImageResponsive class="hidden xl:block"
        :imageURL="`wide_bg.jpg`"
        :width="'3200'"
        :height="'100'"
        :alt="`Backgroundimage`" />
      <ImageResponsive class="hidden sm:block xl:hidden"
        :imageURL="`left_bg.jpg`"
        :width="'1600'"
        :height="'500'"
        :alt="`Backgroundimage`" />
        
        <ImageResponsive class="block sm:hidden"
        :imageURL="`mobile_bg.jpg`"
        :width="'800'"
        :height="'1200'"
        :alt="`Backgroundimage`" />
    </a>
    </div>
    <div class="static w-full sm:w-7/12 sm:absolute sm:top-0 sm:right-0 sm:mr-8 sm:mt-24 flex">
        <h1
          class="text-blackflex-auto font-mono z-30 text-2xl bg-primary-50 shadow-inner shadow-2xl border-primary border p-2"
        >
          Software, AI Research, Daily Computing...
        </h1>
      </div>
      </div>
</template>
<script>
import PostCard from "~/components/PostCard.vue";

export default {
  components: { PostCard },
  props: {
    image_src: {
      type: String
    }
  }
}
</script>
<style lang="scss">

</style>

