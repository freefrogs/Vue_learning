<template>
  <div>
    <h1>Event Listing</h1>
    <EventCard v-for="e in events" :key="e.id" :event="e" />
  </div>
</template>

<script>
import EventCard from "@/components/EventCard.vue";
import EventService from "@/services/EventService";

export default {
  data() {
    return {
      events: [],
    };
  },
  components: {
    EventCard,
  },
  created() {
    EventService.getEvents()
      .then((res) => {
        this.events = res.data;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};
</script>
