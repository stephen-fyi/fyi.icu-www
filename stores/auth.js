import {defineStore} from 'pinia'
import {useRouter} from "nuxt/app";

const BASE_URL = 'https://fyi.icu/api'
export const useAuthStore = defineStore('auth', {
    state: () => ({
        user: {
            email: '',
            username: ''
        },
        authenticated: false,
        signInReq: {
            email: '',
            password: ''
        },
        setPasswordReq: {
            password: ''
        }
    }),
    actions: {
        async setPassword() {
        },
        async signIn() {
        },
        async getUser() {
        },
        async signOut() {
        }
    },
    getters: {}
})