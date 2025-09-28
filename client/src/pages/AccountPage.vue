<script setup>
import { computed, onMounted } from 'vue';
import { AppState } from '../AppState.js';
import { Pop } from '@/utils/Pop.js';
import { logger } from '@/utils/Logger.js';
import { citadelEventsService } from '@/services/CitadelEventsService.js';
import EventListings from '@/components/EventListings.vue';
import { accountService } from '@/services/AccountService.js';


onMounted(() => {
  getHostedEvents()
  getAttendingEvents()
})

const account = computed(() => AppState.account)
const events = computed(() => AppState.citadelEvents)
const attendingEvents = computed(() => AppState.attendingEvents)


async function getHostedEvents() {
  try {
    await citadelEventsService.getHostedEvents()
  }
  catch (error) {
    Pop.error(error);
    logger.log(error)
  }
}


async function getAttendingEvents() {
  try {
    await accountService.getAttendingEvents()
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
      <img class="prof-img" :src="account.picture" alt="" />
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
  <div class="container">

    <section class="row">
      <div class="col-md-12">
        <h3>Upcoming Events:</h3>
      </div>
    </section>
    <div v-if="account">
      <div v-if="attendingEvents" class="row">
        <div v-for="ticket in attendingEvents" :key="ticket.id" class="col-md-3">
          <RouterLink :to="{ name: 'Event', params: { eventId: ticket.event.id } }" class="">
            <div class="event-box position-relative">
              <img class="img-fluid event-pic" :src="ticket.event.coverImg" alt="event picture">
              <b>{{ ticket.event.name }}</b>
              <p class="m-0">{{ ticket.event.location }}</p>
              <p
                class="position-absolute top-0 end-0 bg-white rounded-start p-1 border-start border-bottom border-black">
                {{
                  ticket.event.type }}
              </p>
            </div>
          </RouterLink>
        </div>
      </div>
      <div v-else>
        <h2>Not currently attending any events</h2>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.prof-img {
  max-width: 100px;
  border-radius: 50%;
}

a {
  font-style: unset;
  color: black;
  text-decoration: unset;
}

.event-pic {
  object-fit: cover;
  object-position: center;
  min-width: 100%;
  aspect-ratio: 1/1;
}
</style>
