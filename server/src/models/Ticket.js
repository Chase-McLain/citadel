import { Schema } from "mongoose";



export const TicketSchema = new Schema({

  accountId: { type: Schema.ObjectId, required: true },
  eventId: { type: Schema.ObjectId, required: true },
  ticketCount: { type: Number, require: true, default: 0}

},
{
  timestamps: true, versionKey: false, toJSON: { virtuals: true }
}
)


TicketSchema.virtual('event',{

    localField: 'eventId',
    foreignField: '_id',
    ref: 'CitadelEvent',
    justOne: true
    
  })


  TicketSchema.virtual('profile',{

    localField: 'accountId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true
    
  })











