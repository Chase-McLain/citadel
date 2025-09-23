import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { citadelEventsService } from "../services/CitadelEventsService.js";
import { response } from "express";




export class CitadelEventsController extends BaseController{
  constructor(){
    super('api/events')
      this.router
        .get('', this.getEvents)
        .get('/:eventId', this.getEventById)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createEvent)




  }


  async getEventById(request, response, next){
    try {
      const eventId = request.params.eventId
      const selectedEvent = await citadelEventsService.getEventById(eventId)
      response.send(selectedEvent)
    } catch (error) {
      next(error)
    }
  }


  async getEvents(request, response, next){
    try {
      const citadelEvents = await citadelEventsService.getEvents()
      response.send(citadelEvents)
    } catch (error) {
      next(error)
    }
  }


  async createEvent(request, response, next){
    try {
      const eventData = request.body
      eventData.creatorId = request.userInfo.id
      const newEvent = await citadelEventsService.createEvent(eventData)
      response.send(newEvent)
    } catch (error) {
      next(error)
    }
  }


}












