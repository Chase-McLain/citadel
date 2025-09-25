import { Auth0Provider } from '@bcwdev/auth0provider'
import { accountService } from '../services/AccountService.js'
import BaseController from '../utils/BaseController.js'
import { ticketsService } from '../services/TicketsService.js'
import { citadelEventsService } from '../services/CitadelEventsService.js'

export class AccountController extends BaseController {
  constructor() {
    super('account')
    this.router
      .use(Auth0Provider.getAuthorizedUserInfo)
      .get('', this.getUserAccount)
      .get('/tickets', this.getMyTickets)
      .get('/events', this.getMyEvents)
      .put('', this.editUserAccount)
  }

  
  async getMyEvents(request, response, next){
    try {
      const userInfo = request.userInfo
      const myEvents = await citadelEventsService.getMyEvents(userInfo)
      response.send(myEvents)
    } catch (error) {
      next(error)
    }
  }

  async getMyTickets(request, response, next){
    try {
      const userInfo = request.userInfo
      const myTickets = await ticketsService.getMyTickets(userInfo)
      response.send(myTickets)
    } catch (error) {
      next(error)
    }
  }


  async getUserAccount(req, res, next) {
    try {
      const account = await accountService.getAccount(req.userInfo)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }

   async editUserAccount(req, res, next) {
    try {
      const accountId = req.userInfo.id
      req.body.id = accountId
      const account = await accountService.updateAccount(req.userInfo, req.body)
      res.send(account)
    } catch (error) {
      next(error)
    }
  }
  
}
