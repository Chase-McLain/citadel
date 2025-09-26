<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { Pop } from '@/utils/Pop.js';
import { logger } from '@/utils/Logger.js';
import { citadelEventsService } from '@/services/CitadelEventsService.js';
import EventListings from '@/components/EventListings.vue';


onMounted(() =>
  getHostedEvents()
)

const account = computed(() => AppState.account)
const events = computed(() => AppState.citadelEvents)


async function getHostedEvents() {
  try {
    await citadelEventsService.getHostedEvents()
  }
  catch (error) {
    Pop.error(error);
    logger.log(error)
  }
}



</script>

<template>
  <div class="about text-center">
    <div v-if="account">
      <h1>Welcome back to Citadel {{ account.name }}</h1>
      <img class="" :src="account.picture" alt="" />
      <p class="m-0">user name: {{ account.name }}</p>
      <p> email: {{ account.email }}</p>
    </div>
    <div v-else>
      <h1>Loading... <i class="mdi mdi-loading mdi-spin"></i></h1>
    </div>
  </div>
  <section class="container">
    <div v-if="account" class="row">
      <div class="col-md-12 mt-5">
        <h3>Hosted events:</h3>
      </div>
      <div v-for="event in events" :key="event.id" class="col-md-3">
        <EventListings :event="event" />
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
img {
  max-width: 100px;
  border-radius: 50%;
}

a {
  font-style: unset;
  color: black;
  text-decoration: unset;
}
</style>
