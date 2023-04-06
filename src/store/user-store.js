
import { defineStore } from 'pinia'
import axios from 'axios'

axios.defaults.baseURL = 'http://localhost:4001/'

export const useUserStore = defineStore('user', {
  state: () => ({
    sub: '',
    email: '',
    picture: '',
    firstName: '',
    lastName: '',
    emails: []
  }),
  actions: {
    async getUserDetailsFromGoogle(data) {
      let res = await axios.post('api/google-login', {
        token: data.credential
      })

      this.$state.sub = res.data.sub
      this.$state.email = res.data.email
      this.$state.picture = res.data.picture
      this.$state.firstName = res.data.given_name
      this.$state.lastName = res.data.family_name
    },
  },
})