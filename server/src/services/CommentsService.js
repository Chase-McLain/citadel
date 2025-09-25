import { dbContext } from "../db/DbContext.js"




class CommentsService{


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





