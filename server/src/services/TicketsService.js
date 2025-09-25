import { dbContext } from "../db/DbContext.js"




class TicketsService{
 async getTicketsByEvent(eventId) {
   const tickets = await dbContext.Tickets.find({ eventId }).populate('profile', 'name picture')
   return tickets
 }


 async getMyTickets(userInfo) {
   const myTickets = await dbContext.Tickets.find({ accountId: userInfo.id}).populate('event')
   return myTickets
 }


 async createTicket(ticketData) {
    const newTicket = await dbContext.Tickets.create(ticketData)
    await newTicket.populate('event')
    await newTicket.populate('profile')
    newTicket.ticketCount ++
    return newTicket
  }


}





export const ticketsService = new TicketsService()





