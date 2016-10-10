export const RECEIVE_SINGLE_COMMENT = "RECEIVE_SINGLE_COMMENT";
export const DESTROY_COMMENT = "DESTROY_COMMENT";
export const CREATE_COMMENT = "CREATE_COMMENT";

export const createComment = (comment) => ({
  type: CREATE_COMMENT,
  comment
});

export const receiveSingleComment = (comment) => ({
  type: RECEIVE_SINGLE_COMMENT,
  comment
});

export const destroyComment = (comment) => ({
  type: DESTROY_COMMENT,
  comment
});
