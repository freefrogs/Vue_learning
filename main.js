const app = new Vue({
  el: '#app',
  data: {
    product: 'Plant',
    image: './assets/p1.jpg',
    color: 'orange',
    inStock: 8,
    details: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua'],
    kinds: [{id: 1, color: 'orange', img: './assets/p1.jpg', stock: 8}, {id: 2, color: 'purple', img: './assets/p2.jpg', stock: 0}],
    cart: 0,
  },
  methods: {
    addToCart() {
      if (this.inStock > this.cart) {
        this.cart++
      }
    },
    deleteFromCart() {
      if (this.cart>=1) {
        this.cart--
      }
    },
    changeImage(type) {
      this.image = type.img
      this.inStock = type.stock
      this.color = type.color
      if (this.inStock < this.cart) {
        this.cart = this.inStock
      }
    }
  },
  computed: {
    title() {
      return `${this.product} - ${this.color}`
    }
  }
})