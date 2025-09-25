import mongoose from 'mongoose'
import { AccountSchema } from '../models/Account.js'
import { ValueSchema } from '../models/Value.js'
import { CitadelEventSchema } from '../models/CitadelEvent.js';
import { TicketSchema } from '../models/Ticket.js';
import { CommentSchema } from '../models/Comment.js';

class DbContext {

  Values = mongoose.model('Value', ValueSchema);

  Account = mongoose.model('Account', AccountSchema);
  
  CitadelEvents = mongoose.model('CitadelEvent', CitadelEventSchema);

  Tickets = mongoose.model('Ticket', TicketSchema);

  Comments = mongoose.model('Comment', CommentSchema);

}

export const dbContext = new DbContext()
