Vue.component('Product', {
  template: `
  <div class="product">
    <div class="product_img">
      <img :src="image" :alt="product">
    </div>
    <div class="product_info">
      <h2>{{ title }}</h2>
      <p v-if="inStock >= 10">In stock</p>
      <p v-else-if="inStock > 0 && inStock < 10">Almost sold out!</p>
      <p v-else>Out of stock</p>
      <ul>
        <li v-for="d in details">{{ d }}</li>
      </ul>
      <div>
        <div v-for="k in kinds" class="type" :class="k.color" @click="changeImage(k)"></div>
      </div>
      <div class="cart">
        <button @click="addToCart" :class="{disabled_button: inStock <= 0}" :disabled="inStock <= 0">Add to cart</button>
        <button @click="deleteFromCart" :class="{disabled_button: inStock <= 0}">Delete from cart</button>
        <p class="cart_count">Products in cart: {{ cart }}</p>
      </div>
    </div>
  </div>
  `,
  data() {
    return {
      product: 'Plant',
      image: './assets/p1.jpg',
      color: 'orange',
      inStock: 8,
      details: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua'],
      kinds: [{id: 1, color: 'orange', img: './assets/p1.jpg', stock: 8}, {id: 2, color: 'purple', img: './assets/p2.jpg', stock: 0}],
      cart: 0,
      }
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
Vue.component('Navbar', {
  template: `
    <div class="navbar">
      <h1>New Shop</h1>
    </div>
  `
})
const app = new Vue({
  el: '#app',
})