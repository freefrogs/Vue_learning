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
        <p class="cart_count">Product amount: {{ cart }}</p>
      </div>
    </div>
    <Review @add-review="addReview"></Review>
    <ReviewsBox :productKind="kinds[id-1].reviews"></ReviewsBox>
  </div>
  `,
  data() {
    return {
      id: 1,
      product: 'Plant',
      image: './assets/p1.jpg',
      color: 'orange',
      inStock: 8,
      details: ['Lorem ipsum dolor sit amet', 'consectetur adipiscing elit', 'sed do eiusmod tempor incididunt', 'ut labore et dolore magna aliqua'],
      kinds: [
        {id: 1, color: 'orange', img: './assets/p1.jpg', stock: 8, reviews: [{user: 'Joe', desc: 'bla, bla, bla'}]},
        {id: 2, color: 'purple', img: './assets/p2.jpg', stock: 2, reviews: []}],
      cart: 0,
      }
  },
  methods: {
    addToCart() {
      if (this.inStock > this.cart) {
        this.cart++
      }
      this.$emit('change-cart', this.product, this.color, this.cart)
    },
    deleteFromCart() {
      if (this.cart>=1) {
        this.cart--
      }
      this.$emit('change-cart', this.product, this.color, this.cart)
    },
    changeImage(type) {
      this.image = type.img
      this.inStock = type.stock
      this.color = type.color
      this.id = type.id
      if (this.inStock < this.cart) {
        this.cart = this.inStock
      }
    },
    addReview(u, d) {
      const review = {user: u, desc: d}
      this.kinds[this.id-1].reviews = [...this.kinds[this.id-1].reviews, review]
    },
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

Vue.component('Cart', {
  template: `
  <div class="globalCart">
    <h2>Your Cart:</h2>
    <ul>
      <li v-for='p in list'>{{ p.product }}, amount: {{ p.cart }}</li>
    </ul>
  </div>
  `,
  props: {
    list: Array,
  }
})

Vue.component('Review', {
  template: `
    <form class="review" @submit="addReview">
      <h3>Add product review</h3>
      <input class="form_item" type="text" v-model="user" placeholder="enter your name">
      <p class="error" v-show="error_user">Your name should be 2 to 20 characters long</p>
      <textarea class="form_item" row="4" v-model="desc" placeholder="enter your product review"></textarea>
      <p class="error" v-show="error_desc">Your review should be 2 to 100 characters long</p>
      <input class="btn" type="submit" value="Send" />
    </form>
  `,
  data() {
    return {
      user: '',
      desc: '',
      error_user: false,
      error_desc: false,
    }
  },
  methods: {
    addReview(e) {
      e.preventDefault()
      if (this.user <= 2 || this.user > 20) {
        this.error_user = true
        return
      } else if (this.desc <= 2 || this.desc > 100) {
        this.error_desc = true
        return
      }
      this.$emit('add-review', this.user, this.desc)
      this.user = ''
      this.desc = ''
      this.error_user = false
      this.error_desc = false
    }
  }
})

Vue.component('ReviewsBox', {
  template: `
    <ul class="reviews_box">
      <h3>Our clients reviews</h3>
      <p v-if="!productKind.length">That product is waiting for review...</p>
      <li class="review_item" v-for="r in productKind">
        <p>{{r.desc}}</p>
        <p class="review_user">{{r.user}}</p>
      </li>
    </ul>
  `,
  props: {
    productKind: {
      type: Array,
    }
  }
})

const app = new Vue({
  el: '#app',
  data() {
    return {
      productsList: [],
    }
  },
  methods: {
    updateCart(x,y,z) {
      const newProduct = {product: `${x} ${y}`, cart: z}
      const check = this.productsList.findIndex(item => item.product === `${x} ${y}`)
      if (check === -1 && z === 0) {
        return
      }
      if (check === -1) {
        this.productsList = [...this.productsList, newProduct]
      } else {
        if (z === 0) {
          this.productsList = [...this.productsList.filter(item => item !== this.productsList[check])]
          return
        }
        this.productsList[check].cart = z
      }
    }
  }
})