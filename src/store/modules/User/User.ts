import { VuexModule, Module, Action, Mutation, getModule } from 'vuex-module-decorators'
import { login, logout, getUserInfo, updateUserInfo } from '@/api/users'
import { getToken, setToken, removeToken } from '@/utils/cookies'
import store from '@/store'

import { IUser, defaultUserState } from '@/types/Users.ts'

export interface IUserState {
  token: string
  name: string
  introduction: string
  roles: string[],
  details: { [key: string]: any }

  avatar: string

  // firstName: string,
  // lastName: string,
  // phoneNumber: string,
  // company: string,
  // address: {
  //   street: string,
  //   city: string,
  //   zipCode: number,
  //   country: string
  // },
  // website: string
}

@Module({ dynamic: true, store, name: 'user' })
class User extends VuexModule {
  public token = getToken() || ''
  public name = ''
  public avatar = ''
  public introduction = ''
  public roles: string[] = []
  details: IUser = defaultUserState();

  @Mutation
  private SET_TOKEN(token: string) {
    this.token = token
  }

  @Mutation
  private SET_NAME(name: string) {
    this.name = name
  }

  @Mutation
  private SET_AVATAR(avatar: string) {
    this.avatar = avatar
  }

  @Mutation
  private SET_INTRODUCTION(introduction: string) {
    this.introduction = introduction
  }

  @Mutation
  private SET_ROLES(roles: string[]) {
    this.roles = roles
  }
  @Mutation
  private SET_USER_DETAILS(details: IUser) {
    this.details = JSON.parse(JSON.stringify(details))

    console.log('SETT USER DETAILS: this: ', this)
  }

  @Action
  public async Login(userInfo: { username: string, password: string }) {
    let { username, password } = userInfo
    username = username.trim()
    const { data } = await login({ username, password })
    setToken(data.accessToken)
    this.SET_TOKEN(data.accessToken)
  }

  @Action
  public ResetToken() {
    removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }

  @Action
  public async GetUserInfo() {
    if (this.token === '') {
      throw Error('GetUserInfo: token is undefined!')
    }
    const { data } = await getUserInfo({ /* Your params here */ })
    if (!data) {
      throw Error('Verification failed, please Login again.')
    }
    const { roles, name, avatar, introduction } = data.user
    // roles must be a non-empty array
    if (!roles || roles.length <= 0) {
      throw Error('GetUserInfo: roles must be a non-null array!')
    }
    this.SET_ROLES(roles)
    this.SET_NAME(name)
    this.SET_AVATAR(avatar)
    this.SET_INTRODUCTION(introduction)
    this.SET_USER_DETAILS(data.user)
  }

  // @Action
  // public async UpdateUserInfo(data: IUser) {
  //   if (this.token === '') {
  //     throw Error('GetUserInfo: token is undefined!')
  //   }
  //   const { data } = await updateUserInfo(data)
  //   if (!data) {
  //     throw Error('Verification failed, please Login again.')
  //   }
  //   const { roles, name, avatar, introduction } = data.user
  //   // roles must be a non-empty array
  //   if (!roles || roles.length <= 0) {
  //     throw Error('GetUserInfo: roles must be a non-null array!')
  //   }
  //   this.SET_ROLES(roles)
  //   this.SET_NAME(name)
  //   this.SET_AVATAR(avatar)
  //   this.SET_INTRODUCTION(introduction)
  //   this.SET_USER_DETAILS(user)
  // }

  @Action
  public async LogOut() {
    if (this.token === '') {
      throw Error('LogOut: token is undefined!')
    }
    await logout()
    removeToken()
    this.SET_TOKEN('')
    this.SET_ROLES([])
  }
}

export const UserModule = getModule(User)
