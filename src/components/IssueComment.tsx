import {FC} from 'react';
import {OrgRepoDetailNumber} from "../types/issueDetail";
import {useQuery} from "react-query";
import {fetchIssueComment} from "../api/api";
import {CommentType} from "../types/issueComment";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

const IssueComment: FC<OrgRepoDetailNumber> = ({org, repo, number}) => {
  const {data: comments, isLoading} = useQuery<CommentType[]>('comments', () => fetchIssueComment({org, repo, number}))
  return (
    <div>
      {isLoading ? <div>Loading...</div> : <div>
        {comments?.map(comment => (
          <div className="border-b mb-4 pb-4 px-16">
            <a href={comment.user.html_url} className="flex items-center mb-4">
              <img src={comment.user.avatar_url} className="h-10 w-10 rounded-full border-2 mr-3"/>
              <span className="font-bold font-medium text-slate-600">{comment.user.login}</span>
            </a>
            <ReactMarkdown children={comment.body} remarkPlugins={[remarkGfm]}/>
          </div>
        ))}
      </div>}
    </div>
  );
}

export default IssueComment;