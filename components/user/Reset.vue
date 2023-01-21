<template>
  <div>
    <form @submit.prevent="resetHdl()">
      <fieldset class="fieldset-tab">
        <input v-model="resetReq.email" name="email" class="input" type="email" placeholder="email"/>
        <button class="button">Request Reset Link</button>
      </fieldset>
    </form>
  </div>
</template>
<script setup>
import {useMessageStore} from "~/stores/message";

const appLoading = useState('appLoading')
const message = useMessageStore()
const resetReq = reactive({
  email: ''
})

async function resetHdl() {
  appLoading.value = true
  const res = await $fetch('https://fyi.icu/api/user/password/reset', {
    method: 'POST',
    body: resetReq
  })
  message.setMessage(res.message)
  appLoading.value = false
}
</script>