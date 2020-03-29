<template>
  <div class="layout">
    <Navbar/>
    <nuxt class="nuxt-content"/>
    <Footer/>
  </div>
</template>

<script>
import Navbar from '~/components/Sections/NavBar.vue'

import Footer from '~/components/Sections/Footer.vue'

  export default {
    components: {
      Navbar,
      Footer
    }
  }
</script>

<style>
html{
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
  transition: transform .5s ease-out;
}

.shape{
  @apply w-full max-h-full;
}

li, ul{
  list-style-type: none;
}

</style>
