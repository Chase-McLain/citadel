import { Ticket } from "@/models/Ticket.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { citadelEventsService } from "./CitadelEventsService.js"
import { logger } from "@/utils/Logger.js"




class TicketsService{
  async getTicketsForEvent(eventId) {
    AppState.tickets = []
    const response = await api.get(`api/events/${eventId}/tickets`)
    const tickets = response.data.map((ticket) => new Ticket(ticket))
    AppState.tickets = tickets
    logger.log(AppState.tickets)
  }
  refundTicket(eventId) {
    
  }
  async buyTicket(eventData) {
    const response = await api.post('api/tickets', eventData)
    const ticket = new Ticket(response.data)
    AppState.tickets.push(ticket)
    AppState.activeEvent.capacity --
    AppState.activeEvent.ticketCount ++
    // await citadelEventsService.lowerCapacity()
  }



}




export const ticketsService = new TicketsService()




