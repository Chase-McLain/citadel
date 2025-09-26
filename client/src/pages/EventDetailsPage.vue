<script setup>
import { AppState } from '@/AppState.js';
import { citadelEventsService } from '@/services/CitadelEventsService.js';
import { commentsService } from '@/services/CommentsService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted, ref } from 'vue';
import { useRoute } from 'vue-router';




const event = computed(() => AppState.activeEvent)
const account = computed(() => AppState.account)
const comments = computed(() => AppState.comments)
const route = useRoute()

onMounted(() => {
  getEventById()
  getCommentsById()
})


const commentData = ref({

  eventId: route.params.eventId,
  body: ''

})


async function getCommentsById() {
  try {
    AppState.comments = []
    await commentsService.getCommentsById(route.params.eventId)
  }
  catch (error) {
    Pop.error(error);
    logger.log(error)
  }
}


async function getEventById() {
  try {
    AppState.activeEvent = null
    await citadelEventsService.getEventById(route.params.eventId)
  }
  catch (error) {
    Pop.error(error);
    logger.log(error)
  }
}


async function cancelEvent(eventId) {
  try {
    await citadelEventsService.cancelEvent(eventId)
  }
  catch (error) {
    Pop.error(error);
    logger.log('could not cancel event', error)
  }
}


async function createComment() {
  try {
    await commentsService.createComment(commentData.value)
    commentData.value = {
      eventId: route.params.eventId,
      body: ''
    }
  }
  catch (error) {
    Pop.error(error);
    logger.log('Could not post comment', error)
  }
}


async function removeComment(commentId) {
  try {
    await commentsService.removeComment(commentId)
  }
  catch (error) {
    Pop.error(error);
    logger.log('Could not remove comment', error)
  }
}


</script>


<template>
  <main class="container-fluid">
    <section v-if="AppState.activeEvent" class="row justify-content-center">
      <div class="col-md-12 text-center">
        <h5 class="m-4">{{ event.name }} Details</h5>
        <button class="btn btn-success mb-2">
          Purchase Ticket
        </button>
      </div>
      <div class="col-md-12 text-center">
        <img class="img-fluid event-img" :src="event.coverImg" alt="event picture">
      </div>
      <div class="col-md-6">
        <div v-if="event.isCanceled">
          <h4>EVENT CANCELED</h4>
        </div>
        <div v-else>
          <h4 class="mt-2">Start Date: {{ event.newStartDate }}</h4>
        </div>
        <span class="d-flex justify-content-between">
          <h3>{{ event.name }}</h3>
          <p>Hosted By: {{ event.creator.name }}</p>
        </span>
        <p class="m-0">Category: {{ event.type }}</p>
        <p class="m-0">Slots left: {{ event.capacity }}</p>
        <p class="m-0">Tickets Sold: {{ event.ticketCount }}</p>
        <p class="">{{ event.location }}</p>
        <p>{{ event.description }}</p>
      </div>
      <div class="col-md-7 text-end" v-if="!event.isCanceled">
        <div v-if="AppState.account">
          <div v-if="event.creatorId == account.id">
            <button type="button" @click="cancelEvent(event.id)" class="btn btn-danger">
              CANCEL EVENT
            </button>
          </div>
        </div>
      </div>
    </section>
    <section class="row justify-content-center mt-2">
      <div class="col-md-6 text-end">
        <form @submit.prevent="createComment()">
          <textarea v-model="commentData.body" id="comment-body" class="form-control" required minlength="1"
            maxlength="500" placeholder="Leave a comment!"></textarea>
          <button type="submit" class="btn btn-success mt-2">
            Post
          </button>
        </form>
      </div>
      <div v-if="AppState.comments == []" class="col-md-12 text-center">
        No comments yet
      </div>
      <div v-else class="col-md-7">
        <section class="row">
          <div v-for="comment in comments" :key="comment.id" class="col-md-6 gap-1 mb-2">
            <span class="d-flex">
              <img class="profile-pic" :src="comment.creator.picture" alt="profile picture">
              <p>{{ comment.creator.name }}</p>
            </span>
            <p>{{ comment.body }}</p>
            <div class="text-end">
              <button @click="removeComment(comment.id)" v-if="comment.creatorId == account.id" class="btn btn-danger">
                Remove
              </button>
            </div>
          </div>
        </section>
      </div>
    </section>
  </main>
</template>


<style lang="scss" scoped>
.profile-pic {
  aspect-ratio: 1/1;
  border-radius: 50%;
  max-height: 30px;
}

.event-img {

  object-position: center;
  max-height: 500px;
  min-height: 499px;
}
</style>