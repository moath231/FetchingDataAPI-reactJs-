import "../App.css";
import Reddet from './Reddet';
import Joke from './Joke';
import { useState } from "react";

function App() {
  const [redditvisible,setredditvisible] = useState(false);
  const [jokevisible,setjokevisible] = useState(false);
  return (
    <div>
      <div>
        <button type = "" onClick={() => setredditvisible(prevRedditvisible => !redditvisible) }>taggel riddit</button>
        <button type = "" onClick={() => setjokevisible(prevJokevisible => !jokevisible)}>taggel joke</button>
      </div>

      {jokevisible && <Joke />}
      {redditvisible && <Reddet />}
    </div>
  );
}

export default App;
