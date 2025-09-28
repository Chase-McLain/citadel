import { Ticket } from '@/models/Ticket.js'
import { AppState } from '../AppState.js'
import { Account } from '../models/Account.js'
import { logger } from '../utils/Logger.js'
import { api } from './AxiosService.js'
import { CitadelEvent } from '@/models/CitadelEvent.js'

class AccountService {


  async getAttendingEvents() {
    const response = await api.get('/account/tickets')
    const tickets = response.data.map((ticket) => new Ticket(ticket))
    AppState.attendingEvents = tickets
    logger.log(AppState.attendingEvents)
  }


  async getAccount() {
    try {
      const res = await api.get('/account')
      AppState.account = new Account(res.data)
    } catch (err) {
      logger.error('HAVE YOU STARTED YOUR SERVER YET???', err)
    }
  }
}

export const accountService = new AccountService()
