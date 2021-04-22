<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <teleport to=".modals" v-if="showModal">
    <Modal theme="sale" @close="toggleModal(1)">
      <template v-slot:links>
        <a href="#">watch intro</a>
        <a href="#">read more</a>
      </template>
      <h2>{{ header }}</h2>
      <p>{{ content }}</p>
    </Modal>
  </teleport>
  <teleport to=".modals" v-if="showModal2">
    <Modal @close="toggleModal(2)">
      <template v-slot:links>
        <a href="#">read more</a>
      </template>
      <h2>About us</h2>
      <p>We are awesome</p>
    </Modal>
  </teleport>
  <br>
  <br>
  <button @click="toggleModal(1)">Open modal</button>
  <br>
  <br>
  <button @click="toggleModal(2)">Open modal2</button>
</template>

<script>
import Modal from './components/Modal'

export default {
  name: 'App',
  components: {
    Modal,
  },
  data() {
    return {
      title: 'Hello world',
      header: 'Sign up!',
      content: 'bla, bla, bla',
      showModal: false,
      showModal2: false,
    }
  },
  methods: {
    handleClick() {
      this.$refs.name.classList.toggle('active')
    },
    toggleModal(modal) {
      if (modal === 1) {
        this.showModal = !this.showModal
      } else {
        this.showModal2 = !this.showModal2
      }
      
    }
  }
}
</script>
