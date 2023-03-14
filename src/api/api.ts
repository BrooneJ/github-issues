export const fetchIssueList = () => {
  return fetch(`https://api.github.com/repos/Facebook/react/issues?page=1&per_page=25`).then(response => response.json())
}