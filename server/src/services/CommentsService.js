import { dbContext } from "../db/DbContext.js"




class CommentsService{


  async createComment(commentData) {
    const newComment = await dbContext.Comments.create(commentData)
    return newComment
  }

}





export const commentsService = new CommentsService()





