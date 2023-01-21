<template>
  <div class="text-center">
    <div v-if="res">
      <p class="text-green mb-4">Your IP Address is {{res.ip}}</p>
      <a class="button" href="https://ip.fyi.icu" target="_blank">View API Response</a>
    </div>
    <button v-else class="bg-red text-white py-4 rounded px-16">IP API Down</button>
  </div>
</template>

<script setup>
const {data: res} = useFetch('https://ip.fyi.icu')
</script>