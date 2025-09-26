import { Comment } from "@/models/Comment.js"
import { api } from "./AxiosService.js"
import { AppState } from "@/AppState.js"




class CommentsService{


  async removeComment(commentId) {
    const response = await api.delete(`api/comments/${commentId}`)
    const index = AppState.comments.findIndex((comment) => comment.id == commentId)
    AppState.comments.splice(index, 1)
  }


  async createComment(eventData) {
    const response = await api.post('api/comments', eventData)
    const comment = new Comment(response.data)
    AppState.comments.push(comment)
  }


  async getCommentsById(eventId) {
    const response = await api.get(`api/events/${eventId}/comments`)
    const comments = response.data.map((comment) => new Comment(comment))
    AppState.comments = comments
  }


}






export const commentsService = new CommentsService()







