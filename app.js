const app = Vue.createApp({
  data() {
    return {
      url: 'https://pl.wikipedia.org/wiki/Wikipedia:Strona_g%C5%82%C3%B3wna',
      books: [
        {
          id: 0, title: 'book1', author: 'author1', age: 21, img: 'assets/o1.png', best: true
        },
        {
          id: 1, title: 'book2', author: 'author2', age: 32, img: 'assets/o2.png', best: false
        },
        {
          id: 2, title: 'book3', author: 'author3', age: 43, img: 'assets/o3.png', best: false
        }
      ],
      text: 'I will change color if you put mouse on me',
      showDiv: false,
      msg: 'show',
      x: 0,
      y: 0,
    }
  },
  methods: {
    increaseAge() {
      this.books[0].age++
    },
    decreaseAge() {
      this.books[0].age--
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
    },
    fourthEvent(e) {
      this.x = e.offsetX
      this.y = e.offsetY
    },
    changeBest(id) {
      this.books[id].best = !this.books[id].best
    }
  },
  computed: {
    filteredBooks() {
      return this.books.filter(b => b.best)
    }
  }
})

app.mount('#app')