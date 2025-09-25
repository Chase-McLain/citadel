import { Schema } from "mongoose";







export const CommentSchema = new Schema({

  creatorId: { type: Schema.ObjectId, required: true },
  eventId: { type: Schema.ObjectId, required: true },
  body: { type: String, required: true, minlength: 1, maxlength: 500 }

},
{
  timestamps: true, versionKey: false, toJSON: { virtuals: true }
}
)


  CommentSchema.virtual('creator',{

    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true

  })