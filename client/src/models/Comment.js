



export class Comment{
  constructor(data){

    this.id = data._id
    this.creatorId = data.creatorId
    this.eventId = data.eventId
    this.body = data.body
    this.createdAt = data.createdAt
    this.updatedAt = data.updatedAt

  }
}








