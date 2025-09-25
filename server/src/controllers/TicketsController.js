import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";




export class TicketsController extends BaseController{
  constructor(){
    super('api/tickets')
      this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createTicket)


  }


  async createTicket(request, response, next){
    try {
      const ticketData = request.body
      ticketData.accountId = request.userInfo.id
      const newTicket = await 
      response.send(newTicket)
    } catch (error) {
      next(error)
    }
  }





}









