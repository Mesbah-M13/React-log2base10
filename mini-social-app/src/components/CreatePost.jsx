import React, { useContext, useRef } from "react";
import { PostList } from "../store/posts-list-store";

const CreatePost = () => {
  const { addPost } = useContext(PostList);

  const userIdElement = useRef();
  const postTitleElement = useRef();
  const postBodyElement = useRef();
  const reactionsElement = useRef();
  const tagsElement = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const userId = userIdElement.current.value;
    const postTitle = postTitleElement.current.value;
    const postBody = postBodyElement.current.value;
    const reactions = reactionsElement.current.value;
    const tags = tagsElement.current.value.split(' ')


    userIdElement.current.value =''
    postBodyElement.current.value =''
    postBodyElement.current.value =''
    reactionsElement.current.value =''
    tagsElement.current.value =''

    addPost(userId,postTitle,postBody,reactions,tags)
  };

  return (
    <form className="m-4" onSubmit={handleSubmit}>
      <div className="mb-3">
        <label htmlFor="userId" className="form-label">
          Enter your User Id here
        </label>
        <input
          ref={userIdElement}
          type="text"
          className="form-control"
          id="userId"
          placeholder="Your User id "
        />
      </div>

      <div className="mb-3">
        <label htmlFor="title" className="form-label">
          Post Title
        </label>
        <input
          ref={postTitleElement}
          type="text"
          className="form-control"
          id="Title"
          placeholder="Enter title"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="body" className="form-label">
          Post Content
        </label>
        <textarea
          ref={postBodyElement}
          type="text"
          rows={4}
          className="form-control"
          id="body"
          placeholder="Tell Us More..."
        />
      </div>
      <div className="mb-3">
        <label htmlFor="reactions" className="form-label">
          Total Reactions
        </label>
        <input
          ref={reactionsElement}
          type="text"
          className="form-control"
          id="reactions"
          placeholder="Number of people reacted to this post"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="tags" className="form-label">
          Hashtags
        </label>
        <input
          ref={tagsElement}
          type="text"
          className="form-control"
          id="tags"
          placeholder="Enter tag using space"
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Post Now
      </button>
    </form>
  );
};

export default CreatePost;
