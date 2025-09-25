import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,

  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /** @type {import('./models/CitadelEvent.js').CitadelEvent[]}*/
  citadelEvents: [],

  /** @type {import('./models/Comment.js').Comment[]}*/
  comments: [],

  /** @type {import('./models/Ticket.js').Ticket[]}*/
  tickets: [],

})

