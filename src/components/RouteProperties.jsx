import { useEffect, useState } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';
import Container from 'react-bootstrap/Container';

function RouteProperties(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const id = useSelector(store => store.task);
    let workOrder =id[0]?.work_order_id;
    const card = useSelector(store => store.timeCard);
    const property = useSelector(store => store.properties);
    const timecard = useSelector(store => store.timeCard);
    const route = useSelector(store => store.route);

    const [clicked, setClicked] = useState(false);

    useEffect(() => {
        getProperties();
    }, []);

    const getProperties = () => {
        // dispatch ({
        //     type : 'GET_TASKS'
        // });
        dispatch({
            type: 'ADD_TIMECARD', 
            payload: {work_order_id : workOrder}
        });
    }
    
    function clockIn() {
        console.log('the current props going into the clock in function are: ', props);
        if (clicked === true) {
            setClicked(false);
        } else {
            setClicked(true);
        }
        console.log('this is the payload', props.id);
        console.log('clock in was pressed');
        console.log('the props are: ', props);
            dispatch({
                type: 'UPDATE_CLOCK_IN',
                payload: props.id
            });
            // dispatch({
            //     type: 'FETCH_TIMECARD',
            //     payload: {work_order_id : workOrder}
            // });
    }

    const clockOut = () => {
        if (clicked === true) {
            setClicked(false);
        } else {
            setClicked(true);
        }
        console.log('Clock out button was pressed');
        dispatch({
            type: 'UPDATE_CLOCK_OUT',
            payload: props.id
        });
    }

    function deleteTask(){
        alert('deleted task from property ', props?.name);
        dispatch({
            type: 'DELETE_TASK',
            payload: props.id
        });
    }

    return (
        <Container>
            <ul>
                <li> {props?.property_id} {props?.name} <br /> {props?.street}, {props?.city}, {props?.state} - {props?.zip}
                {!clicked && <button className="clock-in-button" onClick={clockIn} >Clock In</button>}
                {clicked && <button className="clock-out-button" onClick={clockOut} >Clock Out</button>}
                <button onClick={deleteTask} >Delete Entry</button></li>
            </ul>
        </Container>
    );
}
export default RouteProperties;