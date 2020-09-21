export interface IUser {
  id: number,
  username: string,
  password: string,
  name: string,
  avatar: string,
  introduction: string,
  email: string,
  phoneNumber: string,
  roles: Array<string>,
  firstName: string,
  lastName: string,
  company: string,
  address: {
      street: string,
      city: string,
      country: string,
      zipCode: string
  },
  website: string,
  customerId: string,
  accountType: string,
  signupDate: string,
  usageStats: Array<{
    id: number,
    title: string,
    description: string,
    subtitle: string
  }>
  accountIndustry: string
}

export function defaultUserState(): IUser {
  return {
    id: NaN,
    username: '',
    password: '',
    name: '',
    avatar: '',
    introduction: '',
    email: '',
    phoneNumber: '',
    roles: [],
    firstName: '',
    lastName: '',
    company: '',
    address: {
      street: '',
      city: '',
      country: '',
      zipCode: ''
    },
    website: '',
    customerId: '',
    accountType: '',
    signupDate: '',
    usageStats: [],
    accountIndustry: ''
  }
}
