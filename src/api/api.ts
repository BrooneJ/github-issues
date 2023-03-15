import axios from "axios";
import {ListsType} from "../types/issueList";

export const fetchIssueList = async () => {
  const response = await axios.get<ListsType[]>(`https://api.github.com/repos/Facebook/react/issues?page=1&per_page=25`)
  return response.data
  // return fetch(`https://api.github.com/repos/Facebook/react/issues?page=1&per_page=25`).then(response => response.json())
}

export const fetchCount = async () => {
  const response = await axios.get(`https://api.github.com/repos/Facebook/react`)
  return response.data
}