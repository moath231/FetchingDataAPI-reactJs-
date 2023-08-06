import React from "react";
import useFetch from "../hooks/useFetch";

export default function Reddet() {

  const {data: posts,isLoading,isError} = useFetch('https://www.reddit.com/r/aww.json');
  return (
    <div>
      {isLoading && 'loading...'}
      {posts && (
        <ul>
          { posts.data.children.map(post => (
            <li key={post.data.id}>
              <a href = {`https://reddit.com/${post.data.permalink}`}>{post.data.title}</a>
            </li>
            ))}
        </ul>
      )}
      {isError && <div>{isError}</div>}
    </div>
  );
}
