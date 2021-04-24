<template>
  <div>
    <h1>Event Listing</h1>
    <router-link :to="{ name: 'EventShow', params: { id: '1' } }"
      >Show Event #1</router-link
    >
  </div>
</template>
