import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function TaskItem({ task }) {
    const dispatch = useDispatch();
    // const history = useHistory();
    // const id = useSelector(store => store.task);
    // let workOrder =id[0]?.work_order_id;
    // const card = useSelector(store => store.timeCard);
    // const property = useSelector(store => store.properties);
    const timecard = useSelector(store => store.timeCard);
    const filteredTimecards = timecard.filter(timecard => timecard.id === Number(task?.id));
    // const route = useSelector(store => store.route);
    // const [clicked, setClicked] = useState(false);

    // useEffect(() => {
    //     getProperties();
    // }, []);

    // const getProperties = () => {
    //     // dispatch ({
    //     //     type : 'GET_TASKS'
    //     // });
    //     dispatch({
    //         type: 'ADD_TIMECARD', 
    //         payload: {work_order_id : workOrder}
    //     });
    // }
    
    function clockIn(task) {
        console.log('the clock in button was clicked!', task);
    
        // if (clicked === true) {
        //     setClicked(false);
        // } else {
        //     setClicked(true);
        // }
        // console.log('this is the payload', props.id);
        // console.log('clock in was pressed');
        // console.log('the props are: ', props);

        dispatch({
            type: 'ADD_TIMECARD_TO_TASK',
            payload: task.id
        });
        // dispatch({
        //     type: 'UPDATE_CLOCK_IN',
        //     payload: task.id
        // });
            // dispatch({
            //     type: 'FETCH_TIMECARD',
            //     payload: {work_order_id : workOrder}
            // });
    }

    const clockOut = (task) => {
        // if (clicked === true) {
        //     setClicked(false);
        // } else {
        //     setClicked(true);
        // }
        console.log('Clock out button was pressed');
        dispatch({
            type: 'UPDATE_CLOCK_OUT',
            payload: task.id
        });
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
            {task?.property?.street}, {task?.property?.city}, {task?.property.state} - {task?.property?.zip}
            <button className="clock-in-button" onClick={() => clockIn(task)}>Clock In</button>
            <button className="clock-out-button" onClick={() => clockOut(task)} >Clock Out</button>
            {/* <button onClick={deleteTask} >Delete Entry</button> */}
        </li>
    );
}
export default TaskItem;