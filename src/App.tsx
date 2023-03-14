import React from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import {useQuery} from "react-query";
import {fetchIssueList} from "./api/api";
import IssueLists from "./components/IssueLists";

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

function App() {
  const {data: lists, isLoading} = useQuery<ListsType[]>('issues', fetchIssueList)
  console.log(lists)
  return (
    <div className="p-4 max-w-[820px] min-w-[820px] my-0 mx-auto">
      <SearchBar/>
      {isLoading ? <span>isLoading</span> : <>
        {lists?.map(list => (<IssueLists list={list} />))}
      </>}
    </div>
  );
}

export default App;
