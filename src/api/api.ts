import axios from "axios";
import {ListsType} from "../types/issueList";
import {OrgRepo, OrgRepoNumber} from "../types/search";

export const fetchIssueList = async ({org, repo, pageNumber}: OrgRepoNumber) => {
  const response = await axios.get<ListsType[]>(`https://api.github.com/repos/${org}/${repo}/issues?page=${pageNumber}&per_page=25`)
  return response.data
  // return fetch(`https://api.github.com/repos/Facebook/react/issues?page=1&per_page=25`).then(response => response.json())
}

export const fetchCount = async ({org, repo}: OrgRepo) => {
  const response = await axios.get(`https://api.github.com/repos/${org}/${repo}`)
  return response.data
}