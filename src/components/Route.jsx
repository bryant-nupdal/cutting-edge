import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from 'react-bootstrap/Button';

function Route(props) {
    const history = useHistory();

    const SelectedRoute = () => {
        console.log('a Route has been selected!');
        history.push(`/workorder/${props.workOrderID}/${props.route.id}`);
    }

    return (
        <>
            <div className="routes-list">
                <li> Route Number {props.route.route_number} <Button className="route-button" onClick={SelectedRoute}>Submit</Button></li>
            </div>
        </>
    );
}
export default Route;