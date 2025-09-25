import { Auth0Provider } from "@bcwdev/auth0provider/lib/Auth0Provider.js";
import BaseController from "../utils/BaseController.js";
import { commentsService } from "../services/CommentsService.js";



export class CommentsController extends BaseController{
  constructor(){
    super('api/comments')
      this.router
        .use(Auth0Provider.getAuthorizedUserInfo)
        .post('', this.createComment)
        .delete('/:commentId', this.deleteComment)

  }


  async deleteComment(request, response, next){
    try {
      const commentId = request.params.commentId
      const userInfo = request.userInfo
      const deletedComment = await commentsService.deleteComment(commentId, userInfo)
      response.send('Comment deleted')
    } catch (error) {
      next(error)
    }
  }


  async createComment(request, response, next){
    try {
      const commentData = request.body
      commentData.creatorId = request.userInfo.id
      const newComment = await commentsService.createComment(commentData)
      response.send(newComment)
    } catch (error) {
      next(error)
    }
  }


}










