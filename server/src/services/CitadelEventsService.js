import { dbContext } from "../db/DbContext.js"




class CitadelEventsService{


 async getEventById(eventId) {
   const selectedEvent = await dbContext.CitadelEvents.findById(eventId).populate('creator', 'name picture')
   return selectedEvent
 }


 async getEvents() {
   const citadelEvents = await dbContext.CitadelEvents.find().populate('creator', 'name picture')
   return citadelEvents
 }


 async createEvent(eventData) {
    const newEvent = await dbContext.CitadelEvents.create(eventData)
    await newEvent.populate('creator', 'name picture')
    return newEvent
  }



}







export const citadelEventsService = new CitadelEventsService()







