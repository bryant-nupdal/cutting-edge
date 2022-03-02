import { useEffect } from 'react';
import { useDispatch, useSelector} from 'react-redux';
import { useHistory } from 'react-router-dom';

function RouteProperties(props) {
    const dispatch = useDispatch();
    const history = useHistory();
    const id = useSelector(store => store.task);
    let workOrder =id[0]?.work_order_id;
    const card = useSelector(store => store.timeCard);
    const property = useSelector(store => store.properties);
    const timecard = useSelector(store => store.timeCard);
    const route = useSelector(store => store.route);

    useEffect(() => {
        getProperties();
    }, []);

    const getProperties = () => {
        dispatch ({
            type : 'GET_ALL_ROUTES'
        });
        dispatch({
            type: 'ADD_TIMECARD', 
            payload: {work_order_id : workOrder}
        });
    }
    
    function clockIn() {
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
        <>
            <ul>
                <li> {props?.property_id} {props?.name} <br /> {props?.street}, {props?.city}, {props?.state} - {props?.zip} <button className="clock-in-button" onClick={clockIn} >Clock In</button><button className="clock-out-button" onClick={clockOut} >Clock Out</button><button onClick={deleteTask} >Delete Entry</button></li>
            </ul>
        </>
    );
}
export default RouteProperties;