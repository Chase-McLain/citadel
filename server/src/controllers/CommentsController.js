import { Auth0Provider } from "@bcwdev/auth0provider/lib/Auth0Provider.js";
import BaseController from "../utils/BaseController.js";



export class CommentsController extends BaseController{
  constructor(){
    super('api/comments')
      this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createComment)

  }


  async createComment(request, response, next){
    try {
      const commentData = request.body
      commentData.creatorId = request.userInfo.Id
      const newComment = await
      response.send(newComment)
    } catch (error) {
      next(error)
    }
  }


}










