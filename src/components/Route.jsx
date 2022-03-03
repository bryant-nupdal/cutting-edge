import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Route(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const SelectedRoute = () => {
        console.log('a Route has been selected!');
        // dispatch({
        //     type: 'GET_ROUTE',
        //     payload: props.route.id
        // });

        // this creates the work order on the backend
        // and creates all the tasks for each property
        // dispatch({
        //     type: 'ADD_TASKS'
        // })
        history.push(`/workorder/${props.workOrderID}/${props.route.id}`);
    }

    // TODO: Remove <ul> here, you dont need a new list item for every route
    return (
        <>
            <ul>
                <li>Route Number {props.route.route_number} <button className="route-button" onClick={SelectedRoute}>Submit</button></li>
            </ul>
        </>
    );
}
export default Route;