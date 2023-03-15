import React from 'react';
import './App.css';
import SearchBar from "./components/SearchBar";
import {useQuery} from "react-query";
import {fetchCount, fetchIssueList} from "./api/api";
import IssueLists from "./components/IssueLists";
import {ListsType} from "./types/issueList";
import IssueCount from "./components/IssueCount";
import {IssueCountType} from "./types/issueCount";

function App() {
  const {data: lists, isLoading: isListLoading} = useQuery<ListsType[]>('issues', fetchIssueList)
  const {data: count, isLoading: isCountLoading} = useQuery<IssueCountType>('issueCount', fetchCount)
  const countCheck = count ? <IssueCount count={count} /> : <span>Something wrong...</span>
  return (
    <div className="p-4 max-w-[820px] min-w-[820px] my-0 mx-auto">
      <SearchBar/>
      {isCountLoading ? <span>Loading...</span> : countCheck}
      {isListLoading ? <span>Loading...</span> : <>
        {lists?.map(list => (<IssueLists list={list}/>))}
      </>}
    </div>
  );
}

export default App;
