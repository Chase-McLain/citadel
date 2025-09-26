<script setup>
import { AppState } from '@/AppState.js';
import { CitadelEvent } from '@/models/CitadelEvent.js';
import { computed } from 'vue';



const events = computed(() => AppState.citadelEvents)


const props = defineProps({

  event: { type: CitadelEvent, required: true }

})



</script>


<template>
  <RouterLink :to="{ name: 'Event', params: { eventId: event.id } }" class="">
    <div class="event-box position-relative">
      <img class="img-fluid event-pic" :src="event.coverImg" alt="event picture">
      <b>{{ event.name }}</b>
      <p class="m-0">Hosted by: {{ event.creator.name }}</p>
      <p class="m-0">{{ event.newStartDate }} - {{ event.location }}</p>
      <p>{{ event.ticketCount }} people attending</p>
      <p class="position-absolute top-0 end-0 bg-white rounded-start p-1 border-start border-bottom border-black">{{
        event.type }}
      </p>
    </div>
  </RouterLink>
</template>


<style lang="scss" scoped>
.event-pic {
  object-fit: cover;
  object-position: center;
  min-width: 100%;
  aspect-ratio: 1/1;
}
</style>