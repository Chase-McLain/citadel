import { dbContext } from "../db/DbContext.js"





class CitadelEventsService{


 async cancelEvent(eventId) {
   const canceledEvent = await this.getEventById(eventId)
   canceledEvent.isCanceled = !canceledEvent.isCanceled
   await canceledEvent.save()
   return canceledEvent
 }


 async updateEvent(eventId, eventData) {
   let updatedEvent = await this.getEventById(eventId)
   updatedEvent.name = eventData.name
   updatedEvent.description = eventData.description
   await updatedEvent.save()
   return updatedEvent
 }


 async getEventById(eventId) {
   const selectedEvent = await dbContext.CitadelEvents.findById(eventId).populate('creator', 'name picture').populate('ticketCount')
   if (selectedEvent == null) {
    throw new Error("No event by that Id exists");
    
   }
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







