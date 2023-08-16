//(custom hook)
import { useEffect, useState } from 'react';

const useRandomGameUser = (id) => {
  const [gameUser, setGameUser] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${id}`)
      .then((response) => response.json())
      .then((data) => {
        setGameUser(data);
      })
      .catch(console.error);
  }, [id]); // Re-run the effect whenever the 'userid' prop changes

  return gameUser;
};

export default useRandomGameUser;
