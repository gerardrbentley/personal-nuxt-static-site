<template>
  <div class="resumePage">
    <div class="bg-primary-50 h-auto w-screen pt-16 pb-8">
      
      <a href="/gbentley_resume.pdf">
      <button class="absolute right-0 mr-12 mt-4 bg-primary border-2 border-primary-700 rounded-full h-12 w-32 text-white text-xl hover:shadow-outline hover:bg-primary-700 z-30">Download</button>
      </a>
      <div class="bg-primary-100 background shadow-2xl border-2 border-primary-700 w-11/12 h-full m-auto">
      
        <pdf class="pdf" src="/gbentley_resume.pdf" :page="1"></pdf>
      </div>
    </div>
  </div>
</template>

<script>

</script>

<style>

</style>