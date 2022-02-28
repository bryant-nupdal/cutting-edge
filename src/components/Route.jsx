import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Routes(props) {
    const dispatch = useDispatch();
    const history = useHistory();

    const SelectedRoute = () => {
        console.log('a Route has been selected!');
        dispatch({
            type: 'GET_ROUTE',
            payload: props.id
        });
        dispatch({
            type: 'ADD_TASKS'
        })
        history.push(`/routeSelector/${props.id}`);
    }
    return (
        <>
            <ul>
                <li>Route Number {props.id} <button className="route-button" onClick={SelectedRoute} >Submit</button></li>
            </ul>
        </>
    );
}
export default Routes;