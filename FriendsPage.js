import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate
import Navbar from './Navbar';
import './Navbar.css';
import './FriendsPage.css';

const FriendsPage = () => {
  const [friends, setFriends] = useState([]);
  const [requests, setRequests] = useState([]);
  const navigate = useNavigate(); // Initialize useNavigate

  const handleRequest = (email, action) => {
    if (action === 'accept') {
      setFriends([...friends, { email, completedGames: 0 }]);
    }
    setRequests(requests.filter((request) => request.email !== email));
  };

  const handleAddFriend = (e) => {
    e.preventDefault();
    const friendEmail = e.target.elements.friendEmail.value;
    alert(`Friend request sent to ${friendEmail}`);
    e.target.reset();
  };

  return (
    <div className="friends-container">
      <Navbar />
      <button className="back-home-button" onClick={() => navigate('/home')}>Back to Home</button>
      <h1>Your Friends</h1>

      <div className="leaderboard">
        <h2>Leaderboard</h2>
        <ul>
          {friends.map((friend, index) => (
            <li key={index}>
              <span>{friend.email}</span> - Completed FastFit Games: {friend.completedGames}
            </li>
          ))}
        </ul>
      </div>

      <div className="friend-requests">
        <h2>Friend Requests</h2>
        {requests.length > 0 ? (
          requests.map((request, index) => (
            <div key={index} className="request">
              <span>{request.email}</span>
              <button onClick={() => handleRequest(request.email, 'accept')}>Accept</button>
              <button onClick={() => handleRequest(request.email, 'decline')}>Decline</button>
            </div>
          ))
        ) : (
          <p2>No new friend requests.</p2>
        )}
      </div>

      <div className="add-friend">
        <h2>Add a Friend</h2>
        <form onSubmit={handleAddFriend}>
          <input type="email" name="friendEmail" placeholder="Friend's Email" required />
          <button type="submit">Add Friend</button>
        </form>
      </div>
    </div>
  );
};

export default FriendsPage;

