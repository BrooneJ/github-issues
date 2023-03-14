export type UserType = {
  id: number
  avatar_url: string
  html_url: string
  login: string
}

export type LabelType = {
  id: number
  name: string
}

export type ListsType = {
  id: number
  number: number
  title: string
  user: UserType
  labels: LabelType[]
  state: string
  body: string
  comments: number
}