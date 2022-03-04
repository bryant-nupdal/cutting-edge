import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

function Route(props) {
    const history = useHistory();

    const SelectedRoute = () => {
        console.log('a Route has been selected!');
        history.push(`/workorder/${props.workOrderID}/${props.route.id}`);
    }

    return (
        <>
            <li> Route Number {props.route.route_number} <button className="route-button" onClick={SelectedRoute}>Submit</button></li>
        </>
    );
}
export default Route;