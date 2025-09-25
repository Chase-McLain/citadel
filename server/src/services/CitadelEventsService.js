import { Forbidden } from "@bcwdev/auth0provider/lib/Errors.js"
import { dbContext } from "../db/DbContext.js"





class CitadelEventsService{


 async getMyEvents(userInfo) {
   const myEvents = await dbContext.CitadelEvents.find({ creatorId: userInfo.id}).populate('creator', 'name picture').populate('ticketCount')
   return myEvents
 }


 async cancelEvent(eventId, userInfo) {
   const canceledEvent = await this.getEventById(eventId)
   if (canceledEvent.creatorId != userInfo.id) {
    throw new Forbidden("I know what you are");
   }
   canceledEvent.isCanceled = !canceledEvent.isCanceled
   await canceledEvent.save()
   return canceledEvent
 }


 async updateEvent(eventId, eventData, userInfo) {
   let updatedEvent = await this.getEventById(eventId)
   if (updatedEvent.creatorId != userInfo.id) {
    throw new Forbidden("I know what you are");
   }
   if (updatedEvent.isCanceled) {
    throw new Error("This event has already been canceled");
   }
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
   const citadelEvents = await dbContext.CitadelEvents.find().populate('creator', 'name picture').populate('ticketCount')
   return citadelEvents
 }


 async createEvent(eventData) {
    const newEvent = await dbContext.CitadelEvents.create(eventData)
    await newEvent.populate('creator', 'name picture')
    await newEvent.populate('ticketCount')
    return newEvent
  }



}







export const citadelEventsService = new CitadelEventsService()







