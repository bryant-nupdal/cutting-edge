import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import ListGroup from 'react-bootstrap/ListGroup';
import Accordion from 'react-bootstrap/Accordion';


function TaskItem({ task }) {
    const dispatch = useDispatch();
    const timecards = useSelector(store => store.timeCard);
    const filteredTimecards = timecards.filter(timecard => timecard.task_id === Number(task.id));

    function clockIn(task) {
        console.log('the clock in button was clicked!', task);

        dispatch({
            type: 'ADD_TIMECARD_TO_TASK',
            payload: task
        });
    }

    const clockOut = (timecard) => {
        console.log('Clock out button was pressed', timecard);

        dispatch({
            type: 'UPDATE_CLOCK_OUT',
            payload: timecard
        });
    }

    const deleteTimecard = (timecard) => {
        console.log('Delete button was pressed', timecard);

        dispatch({
            type: 'DELETE_TIMECARD',
            payload: timecard
        });
    }

    let totalDuration = 0;

    return (
        <li className="card">
            <Card style={{ width: '25rem' }}>
                <Card.Header className="propertyName">{task?.property?.property_name} </Card.Header>
                <ListGroup variant="flush">
                    <ListGroup.Item>{task?.property?.street}, {task?.property?.city}, {task?.property.state} - {task?.property?.zip}</ListGroup.Item>
                    <ListGroup.Item>Property Type: Commercial</ListGroup.Item>
                    <ListGroup.Item><Button className="clock-in-button" onClick={() => clockIn(task)}>Clock In</Button></ListGroup.Item>
                    <ListGroup.Item><Accordion>
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Individual Timecards</Accordion.Header>
                            <Accordion.Body>
                                <ul>
                                    {filteredTimecards.map((timecard, index) => {
                                        // in theory you can calculate the duration here between clock in and clock out
                                        // you also know if filteredTimeCards has 0 entries (no one has clocked in)
                                        // you also know if there is clock in AND clock out (so the item may be complete)
                                        // you also know if there is clock in but NO clock out (so in progress)

                                        let a = moment(timecard.clock_in);
                                        let b = moment(timecard.clock_out);
                                        let duration = b.diff(a, 'seconds');
                                        if (timecard.clock_out) {
                                            totalDuration += duration;
                                        }
                                        // Total Time Clocked In: {totalDuration / 60} minutes
                                        return <li key={index}> Date: {moment(timecard.date).format('LL')} <br />
                                            Clocked in At: {moment(timecard.clock_in).format('LT')} <br />
                                            {timecard.clock_out === null ?
                                                <span><Button className="clock-out-button" onClick={() => clockOut(timecard)} >Clock Out</Button> <Button varient="Danger" className="delete-button" onClick={() => deleteTimecard(timecard)} >Delete</Button></span> :
                                                <span> Clocked Out At: {moment(timecard.clock_out).format('LT')} <br /> Completed By: {timecard.username} <br /> Duration is {(duration / 60).toFixed(2)} Hours </span>}
                                            <hr />

                                        </li>
                                    })}
                                </ul>
                            </Accordion.Body>
                        </Accordion.Item>

                    </Accordion></ListGroup.Item>
                </ListGroup>
            </Card>


            {/* could display the status / color / etc */}

            {/* <button onClick={deleteTask} >Delete Entry</button> */}

        </li>
    );
}
export default TaskItem;
