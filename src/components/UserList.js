// UserList.js
import React from 'react';
import useUserList from './hooks/useUserList';
import userLogo from '../images/user_logo.png';
import './css/UserList.css';

function UserList() {
  const userList = useUserList(); // Custom hook to fetch the user list

  if (!userList) {
    return <div>Loading...</div>;
  }

  return (
    <div className='user-list'>
      {userList.map((user) => (
        <div key={user.id} className='user-card'>
          {/* <img className='user-avatar' src={user.avatar_url} alt={user.name} /> */}
          <img className='user-avatar' src={userLogo} alt={user.name} />
          <p className='user-name'>{user.name}</p>
        </div>
      ))}
    </div>
  );
}

export default UserList;
