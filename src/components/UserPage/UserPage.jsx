import React from 'react';
import LogOutButton from '../LogOutButton/LogOutButton';
import { useSelector, useDispatch } from 'react-redux';
import { useHistory } from 'react-router';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import moment from 'moment';

function UserPage() {
  const user = useSelector((store) => store.user);
  const workOrders = useSelector((store) => store.workOrder);
  const history = useHistory();
  const dispatch = useDispatch();

  const viewRoutes = (workOrder) => {
    history.push(`/workOrder/${workOrder.id}`);

  }

  function complete(workOrder) {
    dispatch({
      type: 'UPDATE_COMPLETE',
      payload: workOrder.id
    });
  }

  function newWorkOrder() {
    dispatch({
      type: 'NEW_WORK_ORDER'
    });

  }

  return (
    <Container>
      <div className='text-box'>
        <div className="welcome-text">
          <h3>Welcome, {user.username}!</h3>
        </div>
        <div className="logo-holder">
          <div className="contact">
            <ul className="info-header"><h4>Important Info</h4>
              <li>Office Phone Number: </li>
              <li>Manager Phone Number: </li>
              <li>Repair Service Phone Number: </li>
            </ul>
              <h1>Work Orders</h1>
              <hr />
            <Button varient="primary" onClick={newWorkOrder}>Create a new Work Order</Button>
            <Table>
              <thead>
                <tr>
                <th></th>
                <th>id</th>
                <th>complete</th>
                <th>timestamp</th>
                <th></th>
                </tr>
              </thead>
              <tbody>
                {workOrders.map((workOrder, index) =>
                  <tr key={index}>
                    <td>
                      <Button className="view-routes" varient="primary" onClick={() => viewRoutes(workOrder)}>View Routes</Button>
                    </td>
                    <td>{workOrder.id}</td>
                    <td>{workOrder.is_complete ? 'Yes' : 'No'}
                    </td>
                    <td>
                      {workOrder.is_complete && <span>Completed: {moment(workOrder.timestamp).format('LLLL')}</span>}
                    </td>
                    <td>
                      <Button className="mark-complete" varient="secondary" onClick={() => complete(workOrder)}>Mark Complete</Button>
                    </td>

                  </tr>
                )}
              </tbody>
            </Table>
            </div>
          </div>
        </div>
    </Container>
  );
}

// this allows us to use <App /> in index.js
export default UserPage;
