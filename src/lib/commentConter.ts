export const commentCounter = (comments: number) => {
  return comments > 1 ? `${comments} comments` : `${comments} comment`
}