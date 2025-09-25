import { Schema } from "mongoose";



export const TicketSchema = new Schema({

  accountId: { type: Schema.ObjectId, required: true },
  eventId: { type: Schema.ObjectId, required: true }

},
{
  timestamps: true, versionKey: false, toJSON: { virtuals: true }
}
)












