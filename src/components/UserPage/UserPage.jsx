import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import {useSelector, useDispatch} from 'react-redux';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button';
import SnowStorm from 'react-snowstorm';

function UserPage() {
  const user = useSelector((store) => store.user);

  const dispatch = useDispatch();
  const history = useHistory();

  const viewRoutes = () => {
    console.log('button was clicked to view routes');
    dispatch({
      type: 'GET_ALL_ROUTES'
    });
    history.push("/routeSelector");
  }
  return (
    <div className="container">
      <SnowStorm />
      <h2>Welcome, {user.username}!</h2>
      <div className="logo-holder">
      </div>
      <Button varient="primary" onClick={viewRoutes}>Begin A Route</Button>
      <div className="importantInfo">
        <ul>Important Info:
          <li>Office Phone Number</li>
          <li>Manager Phone Number</li>
          <li>Repair Service Phone Number</li>
        </ul>
      </div>
    </div>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
