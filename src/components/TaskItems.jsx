import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';



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

    return (
        <li>
            {task?.property?.property_name} <br />
            {task?.property?.street}, {task?.property?.city}, {task?.property.state} - {task?.property?.zip} <br />
            <button className="clock-in-button" onClick={() => clockIn(task)}>Clock In</button>
            <ul>
                {filteredTimecards.map((timecard, index) => {
                    // in theory you can calculate the duration here between clock in and clock out
                    // you also know if filteredTimeCards has 0 entries (no one has clocked in)
                    // you also know if there is clock in AND clock out (so the item may be complete)
                    // you also know if there is clock in but NO clock out (so in progress)
                    return <li key={index}> Date: {moment(timecard.date).format('LL')} <br /> 
                    Clocked in At: {moment(timecard.clock_in).format('LT')} <br/> 
                    {timecard.clock_out === null ? 
                        <button className="clock-out-button" onClick={() => clockOut(timecard)} >Clock Out</button> : 
                        <span> Clocked Out At: {moment(timecard.clock_out).format('LT')} <br/> Completed By: {timecard.username}</span>} 
                    <hr />
                    </li>
                })}
            </ul>
            {/* could display the status / color / etc */}

            {/* <button onClick={deleteTask} >Delete Entry</button> */}
        </li>
    );
}
export default TaskItem;
