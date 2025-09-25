import { CitadelEvent } from "@/models/CitadelEvent.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { logger } from "@/utils/Logger.js"



class CitadelEventsService{
  async getEvents() {
    const response = await api.get('api/events')
    const events = response.data.map((event) => new CitadelEvent(event))
    AppState.citadelEvents = events
  }



}




export const citadelEventsService = new CitadelEventsService()



