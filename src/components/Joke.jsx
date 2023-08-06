import React from "react";
import useFetch from "../hooks/useFetch";

export default function Joke() {

  const {data: jokes,isLoading,isError} = useFetch('https://official-joke-api.appspot.com/jokes/random');

  return (
    <div>
      {isLoading && "Loading..."}
      {jokes && (<div>{jokes.setup}  <div></div> {jokes.punchline}</div>)}
      {isError && <div>{isError}</div>}
    </div>
  );
}
