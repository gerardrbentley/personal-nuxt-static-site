<template>
  <div class="myNav">
    <a
        class="navToggler z-50 fixed ml-4 mt-1 rounded-full shadow-inner bg-white hover:bg-white hover:shadow-outline"
        @click="toggleNavBar()"
      >
        <svg
          class="fill-current text-gray-600 h-10 w-10 hover:text-gray-900"
          xmlns="http://www.w3.org/2000/svg"
          enable-background="new 0 0 24 24"
          viewBox="0 0 24 24"
          transform="rotate(270)"
        >
          <g><rect fill="none" height="24" width="24" /></g>
          <g>
            <g>
              <polygon points="15.5,5 11,5 16,12 11,19 15.5,19 20.5,12" />
              <polygon points="8.5,5 4,5 9,12 4,19 8.5,19 13.5,12" />
            </g>
          </g>
        </svg>
      </a>
    <nav
      class="navBar z-40 fixed flex items-end justify-between flex-wrap lg:flex-no-wrap w-full content-start bg-dark h-12 shadow-lg rounded-b pl-4"
    >
      <div class="navLogo flex items-center flex-shrink-0 mr-6 ml-16">
        <a
          href="/"
          class="block sm:hidden p-1 font-bold font-mono text-white xl:text-white"
          >GBentley</a
        >
        <a
          href="/"
          class="hidden sm:block p-1 font-bold font-mono text-white xl:text-white"
          >Gerard Bentley</a
        >
        <a
          id="homeLink"
          href="/"
          class="hidden p-1 md:block font-bold font-mono text-white xl:text-white"
          >: Lost Crumbs</a
        >
      </div>

      <div class="navHamburger block lg:hidden hover:shadow-outer">
        <a
          href="javascript:void(0);"
          class="flex items-center"
          @click="toggleNavLinks()"
        >
          <svg
            class="fill-current text-white hover:text-gray-600 h-10 w-10 mt-1 mr-4"
            enable-background="new 0 0 24 24"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <title>Menu</title>
            <path
              id="navLinksToggle"
              d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"
            />
          </svg>
        </a>
      </div>

      <div
        class="navLinks w-full block hidden flex-grow lg:flex lg:items-center lg:w-auto lg:justify-end"
      >
        <a
          href="#responsive-header"
          class="navLink -ml-4 block text-white p-1 bg-dark font-mono lg:ml-0 lg:mr-4 lg:mt-0 lg:rounded-md"
        >
          VGAC
        </a>
        <a
          href="#responsive-header"
          class="navLink -ml-4 block text-white p-1 bg-dark font-mono lg:ml-0 lg:mr-4 lg:mt-0 lg:rounded-md"
        >
          Resources
        </a>
        <NuxtLink
          to="/resume"
          class="navLink -ml-4 block text-white p-1 bg-dark font-mono lg:ml-0 lg:mr-4 lg:mt-0 lg:rounded-md"
        >
          Resume
        </NuxtLink>
      </div>
    </nav>
    
    </div>
</template>

<script>
      const hamburger = "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z";
      const close =
        "M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z";
export default {
  // methods for page
  methods: {
      toggleNavBar: function (event) {
        let x = document.querySelector(".navBar");
        x.classList.toggle("hidden");
        let y = document.querySelector(".navToggler").firstElementChild;
        if (y.getAttribute("transform") === "rotate(90)") {
          y.setAttribute("transform", "rotate(270)");
        } else {
          y.setAttribute("transform", "rotate(90)");
        }
      },
      toggleNavLinks: function (event){
        let x = document.querySelector(".navLinks");
        x.classList.toggle("hidden");

        let y = document.getElementById("navLinksToggle");
        if (x.classList.contains("hidden")) {
          y.setAttribute("d", hamburger);
        } else {
          y.setAttribute("d", close);
        }
      }
  }
}
</script>

<style>
.navLink:hover {
  @apply text-white bg-primary-800;
}

.navToggler, .navHamburger, .navLogo{
  animation: 1s appear;
  opacity: 0.75;
}

@keyframes appear {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 0.75;
  }
}
</style>
