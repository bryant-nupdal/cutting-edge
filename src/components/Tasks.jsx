import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import TaskItem from './TaskItems';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup'

function Tasks() {

    const dispatch = useDispatch();
    const history = useHistory();
    const params = useParams();
    const routes = useSelector(store => store.routes);
    let filteredTasks = useSelector(store => store.filteredTasks);

    const workOrderID = params.workorderID;
    const routeID = params.routeID;
    const currentRoute = routes.find(route => route.id === Number(routeID));

    filteredTasks = filteredTasks.filter(task => task.property.route_id === Number(routeID));

    function returnToHome() {
        history.push('/user')
    }

    useEffect(() => {
        console.log("inside use effect");
        dispatch({
            type: 'GET_TASKS_BY_WORK_ORDER',
            payload: workOrderID
        });

        // TODO: Get all time cards by work order ID too
        dispatch({
            type: 'FETCH_TIMECARD',
            payload: workOrderID
        });

    }, []); // if currentWorkOrder changes, re-run this

    return (
        <Container>
            <h1>Route <span> {currentRoute?.route_number}</span></h1>
            <hr />
            <section className="AvailableRoutes">
            <Card style={{ width: '18rem' }}>
                <Card.Header>Featured</Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>Cras justo odio</ListGroup.Item>
                    <ListGroup.Item>Dapibus ac facilisis in</ListGroup.Item>
                    <ListGroup.Item>Vestibulum at eros</ListGroup.Item>
                </ListGroup>
            </Card>
                <ul>
                    {filteredTasks.map((task, index) => <TaskItem key={index} task={task}/> )}
                </ul>
                <button onClick={returnToHome}>Submit Timecard for Route: <span>{currentRoute?.route_number}</span></button>
            </section>

        </Container>
    );
}

export default Tasks;