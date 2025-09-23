import { dbContext } from "../db/DbContext.js"




class CitadelEventsService{

 async createEvent(eventData) {
    const newEvent = await dbContext.CitadelEvents.create(eventData)
    await newEvent.populate('creator', 'name picture')
    return newEvent
  }



}







export const citadelEventsService = new CitadelEventsService()







