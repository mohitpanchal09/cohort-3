import React, { useState } from "react";
import { useFetch, usePostTitle } from "../hooks/useFetch";

export const Posts = () => {
  const [postId, setPostId] = useState(1);
  //   const title = usePostTitle();
  const { data, loading } = useFetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`
  );

  if (loading) return <div>Loading...</div>;

  return (
    <div>
      <button onClick={() => setPostId(1)}>1</button>
      <button onClick={() => setPostId(2)}>2</button>
      <button onClick={() => setPostId(3)}>3</button>
      <button onClick={() => setPostId(4)}>4</button>
      {JSON.stringify(data)}
    </div>
  );
};
