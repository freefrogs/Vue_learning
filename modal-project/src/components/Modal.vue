<template>
  <div class="backdrop" @click.self="closeModal">
    <div class="modal" :class="{sale: theme === 'sale'}">
      <slot>default content</slot>
      <div class="actions">
        <slot name="links"></slot>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Modal',
  props: [
    'theme',
  ],
  methods: {
    closeModal() {
      this.$emit('close')
    }
  }
}
</script>

<style scoped>
.modal {
  width: 300px;
  padding: 20px;
  margin: 50px auto;
  background: darkcyan;
  color: white;
  border: 2px solid white;
  border-radius: 20px;
}
.modal.sale {
  background: pink;
}
.backdrop {
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  position: fixed;
  background: rgba(0,0,0,0.4);
  width: 100%;
  height: 100%;
}
</style>
