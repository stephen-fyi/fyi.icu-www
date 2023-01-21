import { defineRule } from "vee-validate";
// import { required, email, min } from '@vee-validate/rules';
import {email, min, required} from "@vee-validate/rules";
import {defineNuxtPlugin} from "#imports";

export default defineNuxtPlugin((nuxtApp) => {
    defineRule('required', required);
    defineRule('email', email);
    defineRule('min', min);
 /*   Object.keys(rules)
        .filter((k) => k !== "default")
        .forEach((rule) => {
            defineRule(rule, rules[rule]);
            //   console.log(rule);
        });*/
});