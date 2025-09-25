import { Forbidden } from "@bcwdev/auth0provider/lib/Errors.js";
import { dbContext } from "../db/DbContext.js"




class CommentsService{


  async deleteComment(commentId, userInfo) {
    const deletedComment = await dbContext.Comments.findById(commentId)
    if (!deletedComment) {
      throw new Error("No comment exists by that Id");
    }
    if (deletedComment.creatorId != userInfo.id) {
      throw new Forbidden("I know what you are");
    }
    await deletedComment.deleteOne()
  }


  async getCommentsByEvent(eventId) {
    const eventComments = await dbContext.Comments.find({ eventId }).populate('creator', 'name picture')
    return eventComments
  }


  async createComment(commentData) {
    const newComment = await dbContext.Comments.create(commentData)
    await newComment.populate('creator', 'name picture')
    return newComment
  }

}





export const commentsService = new CommentsService()





