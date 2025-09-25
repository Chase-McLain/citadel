<script setup>
import { ref } from 'vue';



const types = [

  'concert',
  'convention',
  'sport',
  'digital'

]

const eventData = ref({

  capacity: 0,
  coverImg: '',
  description: '',
  location: '',
  name: '',
  type: '',
  startDate: new Date()

})






</script>


<template>
  <form action="">
    <div class="row">
      <div class="col-md-12">
        <label for="event-name" class="form-label">Event Name: (what is your event called)</label>
        <input v-model="eventData.name" id="event-name" class="form-control" type="text" required minlength="3"
          maxlength="50">
      </div>
      <div class="col-md-12 mt-2">
        <label for="event-location" class="form-label">Event Location: (where will your event take place)</label>
        <input v-model="eventData.location" id="event-location" class="form-control" type="text" required minlength="1"
          maxlength="500">
      </div>
      <div class="col-md-7 mt-2">
        <label for="event-capacity" class="form-label">Event Capacity: (how many people can attend your event)</label>
        <input v-model="eventData.capacity" id="event-capacity" class="form-control" type="number" required
          minlength="1" maxlength="5000">
      </div>
      <div class="col-md-5 mt-2">
        <label for="event-type" class="form-label">Event Type: (choose an event type)</label>
        <select v-model="eventData.type" id="event-type" class="form-control" type="drop-down" required>
          <option value="" disabled>Please choose an event type</option>
          <option v-for="type in types" :key="type" :value="type">{{ type }}</option>
        </select>
      </div>
      <div class="col-md-7 mt-2">
        <label for="event-coverImg" class="form-label">Event Picture: (an image URL of your event)</label>
        <input v-model="eventData.coverImg" id="event-coverImg" class="form-control" type="text" required minlength="1"
          maxlength="500">
      </div>
      <div class="col-md-5 mt-2">
        <label for="event-startDate" class="form-label">Event Date: (when will the event start)</label>
        <input v-model="eventData.startDate" id="event-startDate" class="form-control" type="date" required
          minlength="1" maxlength="500">
      </div>
      <div class="col-md-12 mt-2">
        <label for="event-description" class="form-label">Event description: (describe your event below)</label>
        <textarea v-model="eventData.description" id="event-description" class="form-control" required minlength="1"
          maxlength="1000" placeholder="Description here!">
        </textarea>
      </div>
      <div class="col-md-12 text-end">
        <button class="btn btn-success mt-3">
          Submit
        </button>
      </div>
    </div>
  </form>
</template>


<style lang="scss" scoped></style>