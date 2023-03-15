import {FC} from 'react';
import {truncateString} from "../lib/truncateString";
import {ListsType} from "../types/issueList";
import {commentCounter} from "../lib/commentConter";
import {Link} from "react-router-dom";

type ListProps = {
  list: ListsType
}

const IssueLists: FC<ListProps> = ({list}) => {
  return (
    <div className="flex border-b-2 px-4 py-4">
      <a href={list.user.html_url} className="min-w-[80px] flex flex-col items-center mr-1">
        <img src={list.user.avatar_url} className="h-10 w-10 rounded-full"/>
        <span className="text-xs text-slate-400 break-all text-center">{list.user.login}</span>
      </a>
      <div className="flex flex-col space-y-2">
        <div>
          <Link to={`/issue/${list.user.login}`}>
            <span className="text-slate-500 text-[14px]">#{list.number} </span>
            <span className="font-bold text-[16px]">{list.title}</span>
          </Link>
          <div>({commentCounter(list.comments)})</div>
        </div>
        <p className="break-words">{truncateString(list.body)}</p>
        <div className="flex space-x-2">
          {list.labels.map(label => <div className="text-xs border py-[1px] px-[5px]">{label.name}</div>)}
        </div>
      </div>
    </div>
  );
}

export default IssueLists;