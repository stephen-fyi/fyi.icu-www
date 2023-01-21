<template>
  <nav class="flex flex-row justify-between">
    <nuxt-link to="/">
      <icon-logo class="h-20"/>
    </nuxt-link>
    <div class="absolute top-3 right-3 lg:hidden pl-4 cursor-pointer" @click.prevent="showMenu=!showMenu">
      <icon-close v-if="showMenu" class="h-8 w-8 fill-blue"/>
      <icon-menu v-else class="h-8 w-8 fill-blue"/>
    </div>
    <nav :class="showMenu? 'flex flex-col absolute top-4 right-12 bg-grey-300 lg:bg-white lg:static lg:flex-row items-center justify-center p-2 rounded lg:pr-16' : 'hidden lg:flex pr-16'" class="items-center z-30 gap-2 lg:gap-6">
      <nuxt-link class="link" to="/user/registration">Register For Email</nuxt-link>
      <nuxt-link class="link" to="/domain/registration">Domain Registration</nuxt-link>
      <a class="link" href="https://mail.fyi.icu/sogo" target="_blank">Mail</a>
      <menu-examples/>
      <nuxt-link v-if="!auth.authenticated" class="link" to="/user/sign-in">Sign In</nuxt-link>
      <nuxt-link v-if="!auth.authenticated" class="link" to="/user/sign-up">Sign Up</nuxt-link>
      <button @click="signOutHdl()" class="link" v-if="auth.authenticated">Sign Out</button>
    </nav>
  </nav>
</template>
<script setup>
import {useAuthStore} from "~/stores/auth";
const auth = useAuthStore()
const showMenu = ref(false)
const route = useRoute()
watch(route, (to) => {
  showMenu.value = false
})
/*watch(route.path, (path) => {
  showMenu.value = false
  console.log('Route: ' + path);
})*/
async function signOutHdl(){
  await auth.signOut()
}
</script>