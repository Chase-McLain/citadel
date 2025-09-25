import { reactive } from 'vue'
import { CitadelEvent } from './models/CitadelEvent.js'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({

  /**@type {import('@bcwdev/auth0provider-client').Identity} */
  identity: null,

  /** @type {import('./models/Account.js').Account} user info from the database*/
  account: null,

  /** @type {import('./models/CitadelEvent.js').CitadelEvent[]} user info from the database*/
  CitadelEvents: [],


})

