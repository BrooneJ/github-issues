import {FC} from "react";
import {IssueCountType} from "../App";
import {capitalizeFirstLetter} from "../lib/capitalizeFirstLetter";

type IssueCountProps = {
  count: IssueCountType
}

const IssueCount: FC<IssueCountProps> = ({count}) => {
  const {open_issues_count, owner, name, html_url} = count
  return (
    <div className="text-3xl font-light py-6">
      {open_issues_count} open issues for {capitalizeFirstLetter(owner.login)} / {name}
    </div>
  );
}

export default IssueCount