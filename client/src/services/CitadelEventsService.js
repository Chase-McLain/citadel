import { CitadelEvent } from "@/models/CitadelEvent.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { logger } from "@/utils/Logger.js"



class CitadelEventsService{


  async buyTicket(eventId, event) {
    event.capacity --
    const response = await api.put(`api/events/${eventId}`, event)
  }



  // lowerCapacity() {
  //   const res
  // }


  async cancelEvent(eventId) {
    const response = await api.delete(`api/events/${eventId}`)
    const event = new CitadelEvent(response.data)
    AppState.activeEvent = event
  }


  async getEventById(eventId) {
    const response = await api.get(`api/events/${eventId}`)
    const event = new CitadelEvent(response.data)
    AppState.activeEvent = event
  }


  async getHostedEvents() {
    const response = await api.get('account/events')
    const events = response.data.map((event) => new CitadelEvent(event))
    AppState.citadelEvents = events
  }


  async createEvent(eventData) {
    const response = await api.post('api/events',eventData)
    const event = new CitadelEvent(response.data)
    AppState.citadelEvents.push(event)
    AppState.activeEvent = event
    return event
  }


  async getEvents() {
    const response = await api.get('api/events')
    const events = response.data.map((event) => new CitadelEvent(event))
    AppState.citadelEvents = events
  }



}




export const citadelEventsService = new CitadelEventsService()



