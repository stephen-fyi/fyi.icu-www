<template>
  <div class="p-4 lg:px-32 lg:py-10">
    <h1 class="text-2xl text-gray-400 bg-grey text-center py-2 rounded-t">Email Registration</h1>
    <form @submit.prevent="emailRegistration()">
      <fieldset class="p-8 lg:p-16 flex flex-col gap-2 border rounded-b">
        <p>Enter a current email address you can use to receive a link to finish registration</p>
        <input class="pl-2 border-b" v-model="registrationEmail" placeholder="Registration Email" type="email"/>
        <p>Enter the desired new email address</p>
        <fieldset class="flex flex-row">
          <input v-model="username" class="pl-2 border-b" placeholder="Username" type="text"/>
          <h6>@{{ domain }}</h6>
        </fieldset>
        <button class="button">Register</button>
      </fieldset>
    </form>
    <h6>{{ requestedEmail }}</h6>
    <h6>{{ message }}</h6>
    <app-loading v-if="loading"/>
  </div>
</template>
<script setup>
import {useState} from "nuxt/app";

import {computed} from '#imports'

const registrationEmail = useState('registrationEmail')
const username = useState('username')
const message = useState('message')
const domain = useState('domain')
const loading = useState('loading')
loading.value=false

username.value = ''
domain.value = 'fyi.icu'

const requestedEmail = computed(() => {
  const email = username.value.replaceAll(' ', '.');
  return `${email}@${domain.value}`
})


function emailRegistration() {
  loading.value=true
  console.log('register')

  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: `{"registrationEmail":"${registrationEmail.value}","username":"${requestedEmail._value}","domain":"${domain.value}"}`
  };
console.log(requestedEmail._value)
console.log(options)
  fetch('https://fyi.icu/api/user/register', options)
      .then(response => response.json())
      .then(response => {
        console.log('res',response)
        registrationEmail.value = ''
        username.value = ''
        message.value = response.message
        loading.value=false
      })
      .catch(err => {
        console.error('err',err)
        message.value = err
        loading.value = false
      });
}
</script>