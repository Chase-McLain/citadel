import { Auth0Provider } from "@bcwdev/auth0provider";
import BaseController from "../utils/BaseController.js";




export class CitadelEventsController extends BaseController{
  constructor(){
    super('api/events')
      this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createEvent)




  }


  async createEvent(request, reponse, next){
    try {
      const eventData = request.body
      eventData.creatorId = request.userInfo.id
      
    } catch (error) {
      next(error)
    }
  }


}












