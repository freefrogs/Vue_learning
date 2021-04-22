<template>
  <h1>{{ title }}</h1>
  <input type="text" ref="name">
  <button @click="handleClick">click me</button>
  <div v-if="showModal">
    <Modal theme="sale" @close="toggleModal">
      <template v-slot:links>
        <a href="#">watch intro</a>
        <a href="#">read more</a>
      </template>
      <h2>{{ header }}</h2>
      <p>{{ content }}</p>
    </Modal>
  </div>
  <br>
  <br>
  <button @click="toggleModal">Open modal</button>
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
      showModal: false
    }
  },
  methods: {
    handleClick() {
      this.$refs.name.classList.toggle('active')
    },
    toggleModal() {
      this.showModal = !this.showModal
    }
  }
}
</script>
