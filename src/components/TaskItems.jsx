import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

function TaskItem({ task }) {
    const dispatch = useDispatch();
    // const history = useHistory();
    // const id = useSelector(store => store.task);
    // let workOrder =id[0]?.work_order_id;
    // const card = useSelector(store => store.timeCard);
    // const property = useSelector(store => store.properties);
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
        // dispatch({
        //     type: 'UPDATE_CLOCK_OUT',
        //     payload: timecard.id
        // });
    }

    // function deleteTask(){
    //     alert('deleted task from property ', props?.name);
    //     dispatch({
    //         type: 'DELETE_TASK',
    //         payload: props.id
    //     });
    // }

    return (
        <li>
            {task?.property?.property_id} {task?.property?.name} <br />
            {task?.property?.street}, {task?.property?.city}, {task?.property.state} - {task?.property?.zip} <br />
            <button className="clock-in-button" onClick={() => clockIn(task)}>Clock In</button>
            <ul>
                {filteredTimecards.map((timecard, index) => {
                    // in theory you can calculate the duration here between clock in and clock out
                    // you also know if filteredTimeCards has 0 entries (no one has clocked in)
                    // you also know if there is clock in AND clock out (so the item may be complete)
                    // you also know if there is clock in but NO clock out (so in progress)
                    return <li key={index}> Current time card id is: {timecard.id} Date: {timecard.date} Entry Created At: {timecard.clock_in} <button className="clock-out-button" onClick={() => clockOut(timecard)} >Clock Out</button></li>
                })}
            </ul>
            {/* could display the status / color / etc */}
            
            {/* <button onClick={deleteTask} >Delete Entry</button> */}
        </li>
    );
}
export default TaskItem;
