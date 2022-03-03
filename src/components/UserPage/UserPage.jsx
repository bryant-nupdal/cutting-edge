import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button';
import SnowStorm from 'react-snowstorm';
import Container from 'react-bootstrap/Container';

function UserPage() {
  const user = useSelector((store) => store.user);

  // const dispatch = useDispatch();
  const history = useHistory();

  const viewRoutes = () => {
    console.log('button was clicked to view routes');
    // dispatch({
    //   type: 'GET_ALL_ROUTES'
    // });
    history.push("/routeSelector");
  }
  return (
    <Container>
      <SnowStorm />

      <div className='text-box'>
        <div className="welcome-text">
          <h3>Welcome, {user.username}!</h3>
        </div>
        <div className="logo-holder">
          <div className="contact">
            <Button varient="primary" onClick={viewRoutes}>Begin A Route</Button>
            <ul>Important Info:
              <li>Office Phone Number</li>
              <li>Manager Phone Number</li>
              <li>Repair Service Phone Number</li>
            </ul>
          </div>
        </div>
      </div>
    </Container>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
