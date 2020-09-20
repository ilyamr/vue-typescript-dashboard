import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { IUserState } from './modules/User/User'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState
  user: IUserState
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
