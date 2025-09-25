import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { ticketsService } from "../services/TicketsService.js";




export class TicketsController extends BaseController{
  constructor(){
    super('api/tickets')
      this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createTicket)
        .delete('/:ticketId', this.deleteTicket)


  }


  async deleteTicket(request, response, next){
    try {
      const ticketId = request.params.ticketId
      const userInfo = request.userInfo
      const deletedTicket = await ticketsService.deleteTicket(ticketId, userInfo)
      response.send('Ticket Deleted')
    } catch (error) {
      next(error)
    }
  }

  async createTicket(request, response, next){
    try {
      const ticketData = request.body
      ticketData.accountId = request.userInfo.id
      const newTicket = await ticketsService.createTicket(ticketData)
      response.send(newTicket)
    } catch (error) {
      next(error)
    }
  }




}









