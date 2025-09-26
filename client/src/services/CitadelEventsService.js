import { CitadelEvent } from "@/models/CitadelEvent.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { logger } from "@/utils/Logger.js"



class CitadelEventsService{


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
  }


  async getEvents() {
    const response = await api.get('api/events')
    const events = response.data.map((event) => new CitadelEvent(event))
    AppState.citadelEvents = events
    logger.log(response)
  }



}




export const citadelEventsService = new CitadelEventsService()



