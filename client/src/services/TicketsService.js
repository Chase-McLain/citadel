import { Ticket } from "@/models/Ticket.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"
import { citadelEventsService } from "./CitadelEventsService.js"
import { logger } from "@/utils/Logger.js"




class TicketsService{

  async getTicketsIHaveForEvent(eventId) {
    logger.log(AppState.attendingEvents)
    const tickets = AppState.attendingEvents.filter((ticket) => ticket.eventId == eventId)
    logger.log(tickets)
    logger.log(AppState.attendingEvents)
    if (tickets.length > 0) {
      AppState.ticketsForActiveEvent = 1
    } else
      AppState.ticketsForActiveEvent = null
  }


  async getTicketsForEvent(eventId) {
    AppState.tickets = []
    const response = await api.get(`api/events/${eventId}/tickets`)
    const tickets = response.data.map((ticket) => new Ticket(ticket))
    AppState.tickets = tickets
  }


  async refundTicket(eventId) {
    const ticket = AppState.attendingEvents.find((ticket) => ticket.eventId == eventId )
    const response = await api.delete(`api/tickets/${ticket.id}`)
    const index = AppState.attendingEvents.findIndex((tickets) => tickets.id == ticket.id)
    AppState.attendingEvents.splice(index, 1)
    AppState.tickets.splice(index, 1)
    logger.log(index)
    AppState.activeEvent.capacity ++
    AppState.activeEvent.ticketCount --
    this.getTicketsIHaveForEvent(eventId)
  }


  async buyTicket(eventData) {
    const response = await api.post('api/tickets', eventData)
    const ticket = new Ticket(response.data)
    AppState.tickets.push(ticket)
    AppState.attendingEvents.push(ticket)
    AppState.activeEvent.ticketCount ++
    // await citadelEventsService.lowerCapacity()
    this.getTicketsIHaveForEvent(ticket.eventId)
  }



}




export const ticketsService = new TicketsService()




