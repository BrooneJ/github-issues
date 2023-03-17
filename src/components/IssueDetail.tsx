import {useLocation} from 'react-router-dom'
import {useQuery} from "react-query";
import {fetchIssueDetail} from "../api/api";
import {IssueDetailType} from "../types/issueDetail";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import IssueComment from "./IssueComment";

const IssueDetail = () => {
  const location = useLocation()
  const {org, repo, number} = location.state
  const {data, isLoading} = useQuery<IssueDetailType>('issueDetail', () => fetchIssueDetail({org, repo, number}))
  console.log(data)
  return (
    <div className="p-4 max-w-[820px] min-w-[820px] my-0 mx-auto">
      {isLoading ?
        <div>Loading...</div> :
        <div className="mb-8 px-4">
          <h1 className="text-3xl font-light my-5">{data?.title}</h1>
          <button className="bg-slate-200 py-0.5 px-2 rounded-sm">Back to Issues List</button>
          <div className="flex items-center justify-between my-4">
            <span className="text-lg text-slate-400">#{data?.number}</span>
            <div
              className="text-white bg-green-500 border-2 border-green-600 px-8 py-1 text-xl rounded-sm">{data?.state}</div>
            <div className="flex items-center">
              <img src={data?.user.avatar_url} className="h-10 w-10 rounded-full border-2 mr-2"/>
              <span className="text-slate-500">{data?.user.login}</span>
            </div>
          </div>
          <div className="mb-8">{data?.labels.map(label => <span
            className="text-md border py-[1px] px-[5px]">{label.name}</span>)}</div>
          <hr className="max-w-[80%] mb-8 mt-2 mx-auto"/>
          <ReactMarkdown className="text-md leading-6" children={data!.body} remarkPlugins={[remarkGfm]}/>
        </div>}
      <hr className="max-w-[80%] mb-8 mt-2 mx-auto"/>
      {data?.comments === 0 ? <span>No Comments</span> : <IssueComment repo={repo} org={org} number={number} /> }
    </div>
  );
}

export default IssueDetail;