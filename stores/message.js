import {defineStore} from "pinia";

export const useMessageStore = defineStore('message', {
    state: () => ({
        showMessage: false,
        message:''
    }),
    actions:{
        async setMessage(message) {
            this.message = message
            this.showMessage = true
            const delay = t => new Promise(r => setTimeout(r, t))
            await delay(5000)
            this.showMessage = false
        },
        closeMessage() {
            this.showMessage = false
        }
    },
    getters:{
    }
})