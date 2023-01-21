<template>
  <div>
    <p>{{auth.user.email}}</p>
  </div>
</template>
<script setup>
definePageMeta({
  middleware: ["auth"]
})
import {useAuthStore} from "~/stores/auth";
const auth = useAuthStore()
</script>