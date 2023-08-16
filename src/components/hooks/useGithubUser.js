// useGithubUser.js (custom hook)
import { useEffect, useState } from 'react';

const useGithubUser = (username) => {
  const [githubUser, setGithubUser] = useState(null);

  useEffect(() => {
    fetch(`https://api.github.com/users/${username}`)
      .then((response) => response.json())
      .then((data) => {
        setGithubUser(data);
      })
      .catch(console.error);
  }, [username]); // Re-run the effect whenever the 'username' prop changes

  return githubUser;
};

export default useGithubUser;
