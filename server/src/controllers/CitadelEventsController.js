import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { citadelEventsService } from "../services/CitadelEventsService.js";
import { response } from "express";
import { commentsService } from "../services/CommentsService.js";




export class CitadelEventsController extends BaseController{
  constructor(){
    super('api/events')
      this.router
        .get('', this.getEvents)
        .get('/:eventId', this.getEventById)
        .get('/:eventId/comments', this.getCommentsByEvent)
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createEvent)
        .put('/:eventId', this.updateEvent)
        .delete('/:eventId', this.cancelEvent)


  }


  async getCommentsByEvent(request, response, next){
    try {
      const eventId = request.params.eventId 
      const eventComments = await commentsService.getCommentsByEvent(eventId)
      response.send(eventComments)
    } catch (error) {
      next(error)
    }
  }


  async cancelEvent(request, response, next){
    try {
      const eventId = request.params.eventId
      const canceledEvent = await citadelEventsService.cancelEvent(eventId)
      response.send(canceledEvent)
    } catch (error) {
      next(error)
    }
  }


  async updateEvent(request, response, next){
    try {
      const eventData = request.body
      const eventId = request.params.eventId
      const updatedEvent = await citadelEventsService.updateEvent(eventId, eventData)
      response.send(updatedEvent)
    } catch (error) {
      next(error)
    }
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












