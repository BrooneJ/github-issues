import React, {ChangeEvent, FormEvent, useState} from 'react';
import {SearchBarType} from "../types/search";

function SearchBar({setInputValue}:SearchBarType) {
  const [inputState, setInputState] = useState({org: "Facebook", repo: "react", pageNumber: "1"});
  const handleOrg = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState({...inputState, org: event.target.value})
  }
  const handleRepo = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState({...inputState, repo: event.target.value})
  }
  const handlePageNumber = (event: ChangeEvent<HTMLInputElement>) => {
    setInputState({...inputState, pageNumber: event.target.value})
  }
  const handleSubmit = (event:FormEvent<HTMLFormElement>) => {
    console.log(inputState.org, inputState.repo, inputState.pageNumber)
    event.preventDefault()
    setInputValue({org: inputState.org, repo: inputState.repo, pageNumber: inputState.pageNumber})
  }
  return (
    <form onSubmit={handleSubmit} className="space-y-2">
      <div className="space-x-2">
        <label>Org: </label>
        <input name="org" value={inputState.org} onChange={handleOrg} className="px-2 py-1 rounded-sm"/>
        <label>Repo: </label>
        <input name="repo" value={inputState.repo} onChange={handleRepo} className="px-2 py-1 rounded-sm"/>
        <button className="px-2 py-1 bg-blue-500 rounded-sm">Load Repo</button>
      </div>
      <div className="space-x-2">
        <label>Issues Page: </label>
        <input name="pageNumber" value={inputState.pageNumber} onChange={handlePageNumber} className="px-2 py-1 rounded-sm"/>
        <button className="px-2 py-1 bg-blue-500 rounded-sm">Jump to Page</button>
      </div>
    </form>
  );
}

export default SearchBar;