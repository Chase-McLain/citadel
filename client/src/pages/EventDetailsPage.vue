<script setup>
import { AppState } from '@/AppState.js';
import { citadelEventsService } from '@/services/CitadelEventsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { Comment, computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';




const event = computed(() => AppState.activeEvent)
const account = computed(() => AppState.account)
const comments = computed(() => AppState.comments)
const route = useRoute()

onMounted(() => {
  getEventById()
})


async function getCommentsById() {
  try {
    await
  }
  catch (error) {
    Pop.error(error);
    logger.log(error)
  }
}


async function getEventById() {
  try {
    await citadelEventsService.getEventById(route.params.eventId)
  }
  catch (error) {
    Pop.error(error);
    logger.log(error)
  }
}


</script>


<template>
  <main class="container-fluid">
    <section class="row">
      <div class="col-md-12 text-center">
        <h5 class="m-5">{{ event.name }} Details</h5>
      </div>
      <div class="col-md-12">
        <img class="img-fluid" :src="event.coverImg" alt="event picture">
      </div>
      <div class="col-md-12">
        <div v-if="event.isCanceled">
          <h4>EVENT CANCELED</h4>
        </div>
        <div v-else>
          <h4>Start Date: {{ event.newStartDate }}</h4>
        </div>
        <span class="d-flex">
          <h3>{{ event.name }}</h3>
          <p>Hosted By: {{ event.creator.name }}</p>
        </span>
        <p>Category: {{ event.type }}</p>
        <p>Slots left: {{ event.capacity }}</p>
        <p>Tickets Sold: {{ event.ticketCount }}</p>
        <p>{{ event.location }}</p>
        <p>{{ event.description }}</p>
      </div>
      <div v-if="!event.isCanceled">
        <div v-if="event.creatorId == account.id">
          <button class="btn btn-danger">
            CANCEL EVENT
          </button>
        </div>
      </div>
    </section>
    <section class="row">
      <div class="col">
        <div v-for="comment in comments" :key="comment.id" class="col"></div>

      </div>
    </section>
  </main>
</template>


<style lang="scss" scoped></style>