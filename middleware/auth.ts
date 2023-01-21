import {useAuthStore} from "~/stores/auth";

export default defineNuxtRouteMiddleware((to, from) => {
    const auth = useAuthStore()
    if (!auth.authenticated) {
        const userSession = useCookie('USER_SESSION')
        auth.checkSession()
    }
})