<template>
  <div class="full-screen">
    <nuxt-link to="/" class="absolute top-0 left-0">
      <icon-logo class="h-20 fill-white"/>
    </nuxt-link>
    <div class="flex flex-col gap-4 z-40 text-white w-11/12 lg:w-5/12 h-screen-50">
      <div v-if="step===0" class="flex flex-col gap-2 shadow-lg rounded-lg border border-white px-8 py-8">
        <input class="input" name="firstName" placeholder="Name" type="text" v-model="signUpReq.name"/>
        <button @click="step++" class="button">Next</button>
      </div>
      <div v-if="step===1" class="flex flex-col gap-2 shadow-lg rounded-lg border border-white px-8 py-8">
        <input class="input" name="email" placeholder="email" type="email" v-model="signUpReq.email"/>
        <button class="button" @click="step--">Back</button>
        <button class="button" @click="accountRegistration()">Submit</button>
      </div>
    </div>
  </div>
</template>
<script setup>
import {useMessageStore} from "~/stores/message";
const message = useMessageStore()
const appLoading = useState('appLoading')
const router = useRouter()
const step = ref(0)
const signUpReq = reactive({
  name: '',
  email: ''
})
async function accountRegistration() {
  appLoading.value = true
  const res = await $fetch('https://fyi.icu/api/user/sign-up', {
    method: 'POST',
    body: signUpReq
  })
  console.log('res', res)
  appLoading.value = false
  await message.setMessage(res.message)
  if(res.status===200){
    router.push('/')
  }
}
</script>