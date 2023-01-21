<template>
  <footer class="fixed bottom-0 w-full flex flex-col bg-grey text-white text-center font-semibold py-6">
    <h6>This is a Nuxt3 with Tailwind CSS website</h6>
    <h6>The backend is kotlin/ktor with data stored in MongoDB and LDAP</h6>
    <h4 class="text-white text-sm text-center mt-2">All Rights Reserved. &copy;Fyi.icu
      {{ new Date().getFullYear() }}</h4>
    <div class="flex flex-row justify-center">
      <a href="https://www.facebook.com/fyi.icu/" target="_blank" class="h-8 w-8">
        <icon-facebook class="h-6 w-6"/>
      </a>
      <a href="https://github.com/stephen-fyi/fyi.icu-www" target="_blank" class="h-8 w-8">
        <icon-github class="h-6 w-6"/>
      </a>
    </div>
  </footer>
</template>