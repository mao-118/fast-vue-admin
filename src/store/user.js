import { defineStore } from 'pinia'
export default defineStore('UserStore', {
  state: () => ({
    username: 'tom',
  }),
  getters: {},
  actions: {
    changeUsername(newName) {
      this.username = newName
    },
  },
})
