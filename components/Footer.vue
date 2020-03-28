<template>
  <div class="myFooter">
        <div class="flex content-start justify-between w-full h-12 rounded-t bg-dark ">
      <div class="w-auto flex-shrink text-white p-2 text-sm sm:text-xl">Built with Nuxt / Vue JS, Tailwind CSS, and Gitlab Pages</div>
      <button class="jumpToTop my-1 mr-4 rounded-full shadow-inner bg-white hover:bg-white hover:shadow-outline" v-scroll-to="{
          el: '#top',
          container: 'body',
          duration: 500,
          easing: 'linear',
          offset: -200,
          force: true,
          cancelable: true,
          x: false,
          y: true
        }">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="fill-current text-gray-600 h-10 w-10 hover:text-gray-900"><path d="M7 14l5-5 5 5z"/><path d="M0 0h24v24H0z" fill="none"/></svg>
      </button>
    </div>
    </div>
</template>

<script>
export default {
  // methods for page
  methods: {
      jumpToTop: function (event) {
        console.log('jump')
        window.moveTo(0,0);
      }
  }
}
</script>

<style>

.jumpToTop{
  opacity: 0.75;
}

</style>