import {UserType} from "./issueList";

export type CommentType = {
  id: number
  user: UserType
  body: string
}