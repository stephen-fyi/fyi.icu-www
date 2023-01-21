<template>
  <form @submit.prevent="signInHdl()">
    <fieldset class="fieldset-tab py-8">
      <input v-model="auth.signInReq.email" class="input" name="email" placeholder="email" type="email"/>
      <input v-model="auth.signInReq.password" class="input" name="password" placeholder="password" type="password"/>
      <button class="button">Sign In</button>
    </fieldset>
  </form>
</template>
<script setup>
import {useAuthStore} from "~/stores/auth";

const auth = useAuthStore()
const appLoading = useState('appLoading')

function signInHdl() {
  appLoading.value = true
  auth.signIn()
  appLoading.value = false
}
</script>