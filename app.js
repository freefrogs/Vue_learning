const app = Vue.createApp({
  data() {
    return {
      title: 'Nice book title',
      author: 'Joe Doe',
      age: 12,
      text: 'I will change color if you put mouse on me',
      showDiv: false,
      msg: 'show'
    }
  },
  methods: {
    increaseAge() {
      this.age++
    },
    decreaseAge() {
      this.age--
    },
    changeText() {
      this.text='I lied;-)'
    },
    hideDiv() {
      this.showDiv = !this.showDiv
      if (this.msg === 'show') {
        this.msg = 'hide'
      } else {
        this.msg = 'show'
      }
    }
  }
})

app.mount('#app')