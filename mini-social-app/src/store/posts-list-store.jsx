import { act, createContext, useReducer } from "react";

export const PostList = createContext({
  postList: [],
  addPost: () => {},
  deletePost: () => {},
});

const postListReducer = (currentPostList, action) => {
  let newPostList = currentPostList;
  if (action.type === "DELETE_POST") {
    newPostList = currentPostList.filter(
      (post) => post.id !== action.payload.postId
    );
  }
  else if(action.type === 'ADD_POST'){
    newPostList =[...currentPostList, action.payload];
  }
  return newPostList;
};

const DEFAULT_POST_LIST = [
  {
    id: "1",
    title: "Going Bangladesh",
    body: "Lorem Going BangladeshGoing BangladeshGoing BangladeshGoing Bangladesh",
    reactions: 4,
    userId: "user-8",
    tags: ["vacation", "bangladesh", "bd"],
  },
  {
    id: "2",
    title: "Going Dhaka",
    body: "Lorem Going BangladeshGoing BangladeshGoing BangladeshGoing Bangladesh",
    reactions: 7,
    userId: "user-9",
    tags: ["vacation", "dhaka", "dhk"],
  },
];

const PostListProvider = ({ children }) => {
  const [postList, dispatchPostList] = useReducer(
    postListReducer,
    DEFAULT_POST_LIST
  );

  const addPost = (userId, postTitle, postBody, reactions, tags) => {
    dispatchPostList({
      type: "ADD_POST",
      payload: {
        id: Date.now(),
        title: postTitle,
        body: postBody,
        reactions: reactions,
        userId: userId,
        tags: tags,
      },
    });
  };

  const deletePost = (postId) => {
    dispatchPostList({
      type: "DELETE_POST",
      payload: {
        postId,
      },
    });
  };

  return (
    <PostList.Provider
      value={{
        postList: postList,
        addPost: addPost,
        deletePost: deletePost,
      }}
    >
      {children}
    </PostList.Provider>
  );
};

export default PostListProvider;
