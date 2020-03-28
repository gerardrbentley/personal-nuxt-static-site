<template>
  <div class="resumePage">
    <navbar></navbar>
    <div class="bg-primary-50 h-auto w-screen pt-16 pb-8">
      <div class="bg-primary-100 background shadow-2xl border-2 border-primary-700 w-11/12 h-full m-auto text-white text-4xl">
      
        Whoops... Couldn't find that
      </div>
    </div>
    <myFooter></myFooter>
  </div>
</template>

<script>
import navbar from '~/components/NavBar.vue'
import myFooter from '~/components/Footer.vue'

export default {
  components: {
    navbar,
    myFooter,
  }
}
</script>

<style>

</style>