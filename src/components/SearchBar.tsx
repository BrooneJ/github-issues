import React, {ChangeEvent, FormEvent, useState} from 'react';

function SearchBar() {
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
    event.preventDefault()
  }
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Org: </label>
        <input value={inputState.org} onChange={handleOrg}/>
        <label>Repo: </label>
        <input value={inputState.repo} onChange={handleRepo}/>
        <button>Load Repo</button>
      </div>
      <div>
        <label>Issues Page: </label>
        <input value={inputState.pageNumber} onChange={handlePageNumber}/>
        <button>Jump to Page</button>
      </div>
    </form>
  );
}

export default SearchBar;