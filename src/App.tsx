import React, {useState} from 'react';
import SearchBar from "./components/SearchBar";
import {useQuery} from "react-query";
import {fetchCount, fetchIssueList} from "./api/api";
import IssueLists from "./components/IssueLists";
import {ListsType} from "./types/issueList";
import IssueCount from "./components/IssueCount";
import {IssueCountType} from "./types/issueCount";
import ErrorMessage from "./components/ErrorMessage";
import Loading from "./components/Loading";

function App() {
  const [inputValue, setInputValue] = useState({org: 'Facebook', repo: 'react', pageNumber: "1"});
  const {
    data: lists,
    isLoading: isListLoading,
    error: listError
  } = useQuery<ListsType[]>(['issues', inputValue], () => fetchIssueList(inputValue))

  const {
    data: count,
    isLoading: isCountLoading,
    error: countError
  } = useQuery<IssueCountType>(['issueCount', inputValue.org, inputValue.repo], () => fetchCount({
    org: inputValue.org,
    repo: inputValue.repo
  }))
  console.log(lists)
  const countCheck = count ? <IssueCount count={count}/> : <span>Something wrong...</span>

  const isError = listError || countError
  const isLoading = isListLoading || isCountLoading
  const errorMessage = (listError instanceof Error ? listError.message : "An error occurred.") || (countError instanceof Error ? countError.message : "An error occurred.");

  return (
    <div className="p-4 max-w-[820px] min-w-[820px] my-0 mx-auto">
      <SearchBar setInputValue={setInputValue}/>
      {isLoading ? <Loading /> :
        <>
          {isError ?
            <ErrorMessage errorMessage={errorMessage} />
            : <>
              {countCheck}
              {isListLoading ? <Loading /> : <>
                {lists?.map(list => (<IssueLists list={list} org={inputValue.org} repo={inputValue.repo}/>))}
              </>}
            </>
          }
        </>
      }
    </div>
  );
}

export default App;
