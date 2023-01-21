<template>
  <div>
    <div class="mb-32">
      <app-navbar/>
      <nuxt-page/>
    </div>
    <app-page-footer/>
    <Teleport to="body">
      <div v-if="message.showMessage" class="modal">
        <p class="text-center font-semibold">{{ message.message }}</p>
        <button class="button-black" @click="message.closeMessage">Close</button>
      </div>
    </Teleport>
    <AppLoading v-if="appLoading"/>
  </div>
</template>
<script setup>
const appLoading = useState('appLoading', () => false)
import {useMessageStore} from "./stores/message"

const message = useMessageStore()
</script>