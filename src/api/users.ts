import request from '@/utils/request'
import { IUser } from '@/types/Users.ts'

export const getUserInfo = (data: any) =>
  request({
    url: '/users/info',
    method: 'post',
    data
  })

export const updateUserInfo = (data: IUser) =>
  request({
    url: '/users/' + data.username,
    method: 'put',
    data
  })

export const login = (data: any) =>
  request({
    url: '/users/login',
    method: 'post',
    data
  })

export const logout = () =>
  request({
    url: '/users/logout',
    method: 'post'
  })
