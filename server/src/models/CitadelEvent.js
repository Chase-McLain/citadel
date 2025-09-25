import { Schema } from "mongoose";




export const CitadelEventSchema = new Schema({

  creatorId: { type: Schema.ObjectId, required: true },
  name: {type: String, required: true, minlength: 3, maxlength: 50 },
  description: { type: String, required: true, minlength: 15, maxlength: 1000 },
  coverImg: { type: String, required: true, minlength: 1, maxlength: 500 },
  location: { type: String, required: true, minlength: 1, maxlength: 500 },
  capacity: { type: Number, required: true, minlength: 1, maxlength: 5000 },
  startDate: {type: Date, required: true },
  isCanceled: { type: Boolean, required: true, default: false },
  type: { type: String, enum: ['concert', 'convention', 'sport', 'digital'] }

},
{

  timestamps: true, versionKey: false, toJSON: { virtuals: true }

}
)


  CitadelEventSchema.virtual('creator',{

    localField: 'creatorId',
    foreignField: '_id',
    ref: 'Account',
    justOne: true

  })


   CitadelEventSchema.virtual('ticketCount',{

    localField: '_id',
    foreignField: 'eventId',
    ref: 'Ticket',
    justOne: true
    
  })














