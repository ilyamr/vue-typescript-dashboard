import Vue from 'vue'
import Vuex from 'vuex'
import { IAppState } from './modules/app'
import { IUser } from '@/types/Users.ts'

Vue.use(Vuex)

export interface IRootState {
  app: IAppState
  user: IUser
}

// Declare empty store first, dynamically register all modules later.
export default new Vuex.Store<IRootState>({})
