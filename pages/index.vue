<template>
  <div class="p-8 flex flex-col justify-center">
    <h1 class="text-center text-2xl text-black mb-8">This website is still under development and any services offered are for testing
      purposes only and will not be guaranteed to remain available.</h1>
    <ip-address/>
    <div class="mt-8">
      <p class="text-center">Today is {{ day }}</p>
    </div>
    <div class="flex flex-row justify-center mt-8">
      <div>
        <p class="text-center">A copy of the code for this website can be found on <a href="https://github.com/stephen-fyi/fyi.icu-www" target="_blank">Github</a></p>
      </div>
      <div>
        <a class="h-8 w-8" href="https://github.com/stephen-fyi/fyi.icu-www" target="_blank"><icon-github class="h-6 w-6"/></a>
      </div>
    </div>
  </div>
</template>
<script setup>
const day = ref('')

switch (new Date().getDay()) {
  case 0:
    day.value = "Sunday";
    break;
  case 1:
    day.value = "Monday";
    break;
  case 2:
    day.value = "Tuesday";
    break;
  case 3:
    day.value = "Wednesday";
    break;
  case 4:
    day.value = "Thursday";
    break;
  case 5:
    day.value = "Friday";
    break;
  case 6:
    day.value = "Saturday";
}
</script>