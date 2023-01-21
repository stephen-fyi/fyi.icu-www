<template>
  <div class="relative inline-flex z-30 w-full" @focusout="dropdownOpen=false">
    <button
        ref="trigger"
        class="inline-flex justify-center items-center group link w-full"
        aria-haspopup="true"
        @click.prevent="dropdownOpen = !dropdownOpen"
        :aria-expanded="dropdownOpen"
    >
      <span class="flex flex-row justify-center gap-2 items-center truncate w-full">
        <span class="truncate ml-2 group-hover:text-grey">Examples</span>
        <svg class="w-3 h-3 shrink-0 ml-1 fill-current text-white" viewBox="0 0 12 12">
          <path d="M5.9 11.4L.5 6l1.4-1.4 4 4 4-4L11.3 6z"/>
        </svg>
      </span>
    </button>
    <transition
        enter-active-class="transition ease-out duration-200 transform"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition ease-out duration-200"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
    >
      <div v-show="dropdownOpen"
           class="menu right-0">
        <div class="menu-links">
          <nuxt-link to="/app" class="menu-link">Android Apps</nuxt-link>
          <nuxt-link to="/example/image-carousel" class="menu-link">Image Carousel</nuxt-link>
        </div>
      </div>
    </transition>
  </div>
</template>

<script setup>
const dropdownOpen = ref(false)
</script>
