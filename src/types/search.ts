import {Dispatch, SetStateAction} from "react";

export type OrgRepoNumber = OrgRepo & {pageNumber: string}

export type OrgRepo = {
  org: string
  repo: string
}

export type SearchBarType = {
  setInputValue: Dispatch<SetStateAction<OrgRepoNumber>>
}