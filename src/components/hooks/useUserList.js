// useUserList.js
import { useEffect, useState } from 'react';

const useUserList = () => {
  const [userList, setUserList] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/users/?password=swEd05YQKIZ')
      .then((response) => response.json())
      .then((data) => {
        setUserList(data);
      })
      .catch(console.error);
  }, []);

  return userList;
};

export default useUserList;
