export const createComment = (comment, success) => {
  return $.ajax({
    method: "POST",
    url: '/api/comments',
    data: { comment },
    success
  });
};

export const destroyComment = (comment, success) => {
  return $.ajax({
    method: "DELETE",
    url: `api/comments/${comment.id}`,
    success
  });
};
