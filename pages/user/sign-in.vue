<template>
  <div class="flex flex-row justify-center lg:pt-16">
    <div class="p-2 w-full lg:w-5/12">
      <div class="flex flex-row">
        <button @click="signIn=true" :class="signIn? 'tab' : 'tab-disabled'">Sign In</button>
        <button @click="signIn=false" :class="signIn? 'tab-disabled' : 'tab'">Reset</button>
      </div>
      <component :is="signIn? userSignIn : userReset"></component>
    </div>
  </div>
</template>
<script setup>
const userSignIn = resolveComponent('UserSignIn')
const userReset = resolveComponent('UserReset')
const signIn = ref(true)
</script>

