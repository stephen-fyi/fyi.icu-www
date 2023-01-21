<template>
  <div class="px-4 lg:px-16 py-2 lg:py-8">
    <div>
<!--    <form @submit.prevent="setPassword">
      <fieldset class="fieldset">
        <p>Enter Password To Complete Registration</p>
        <input placeholder="password" class="border-b" v-model="password" type="password">
        <button class="button">Complete Registration</button>
      </fieldset>
    </form>-->
    </div>
    <div class="fieldset">
      <VForm
          class="card p-5"
          :validation-schema="schema"
          :initial-values="initialValues"
          v-slot="{ meta: formMeta, errors: formErrors }"
          @submit="handleSubmit"
      >
        <VTextInput
            type="password"
            name="password"
            label="Password"
            placeholder="Password"
        />
        <VTextInput
            type="password"
            name="confirmed"
            label="Confirm Password"
            placeholder="Confirm Password"
        />

        <template v-if="Object.keys(formErrors).length">
          <p class="help is-danger has-text-weight-bold">
            Please correct the following errors:
          </p>
          <ul>
            <li
                v-for="(message, field) in formErrors"
                :key="field"
                class="help is-danger"
            >
              {{ message }}
            </li>
          </ul>
        </template>

        <button
            class="button mt-3"
            :class="{ 'button': formMeta.valid }"
            :disabled="!formMeta.valid"
            type="submit"
        >
          Submit
        </button>
      </VForm>
    </div>
  </div>
</template>

<script setup>
import {useRoute} from "nuxt/app";
import { object, string, ref as yupRef } from "yup";
import { configure } from "vee-validate";
import {useMessageStore} from "~/stores/message";
const message = useMessageStore()
const accessToken = ref('')
const registrationReq = reactive({
  password: ''
})
const route = useRoute()
const router = useRouter()
accessToken.value = route.params.token

const handleSubmit = async (values, actions) => {
  console.log(values);
  registrationReq.password = values.password
  const options = {
    method: 'POST',
    headers: {'Content-Type': 'application/json', Authorization: `Bearer ${accessToken.value}`},
    body: registrationReq
  };

  const res = await $fetch('https://fyi.icu/api/user/password', options)
  console.log('res', res)
  actions.resetForm();
  if(res.status===200){
    message.setMessage(res.message)
    router.push('/user/sign-in')
  }
};

configure({
  validateOnBlur: true, // controls if `blur` events should trigger validation with `handleChange` handler
  validateOnChange: true, // controls if `change` events should trigger validation with `handleChange` handler
  validateOnInput: false, // controls if `input` events should trigger validation with `handleChange` handler
  validateOnModelUpdate: true, // controls if `update:modelValue` events should trigger validation with `handleChange` handler
});

const schema = object({
  password: string().required().min(8).label("Your Password"),
  confirmed: string()
      .required()
      .oneOf([yupRef("password")], "Passwords do not match") //Cross-Field Validation
      .label("Your Confirmation Password"),
});

const initialValues = { password: "", confirmed: "" };
</script>