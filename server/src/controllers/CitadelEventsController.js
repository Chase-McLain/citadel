import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";
import { citadelEventsService } from "../services/CitadelEventsService.js";
import { response } from "express";




export class CitadelEventsController extends BaseController{
  constructor(){
    super('api/events')
      this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createEvent)




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












