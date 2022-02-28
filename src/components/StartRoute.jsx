import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import RouteProperties from './RouteProperties';

function StartRoute() {

    const dispatch = useDispatch();
    const history = useHistory();
    const storeRoute = useSelector(store => store.route);
    const route = storeRoute.filter(function (workOrderId) {
        return workOrderId.work_order_id === storeRoute[0]?.work_order_id;
    });
    console.log('what is happeminmg', route);

    useEffect(() => {
        getProperties();
    }, []);

    const getProperties = () => {
        dispatch ({
            type : 'GET_ALL_ROUTES'
        });
    }

    function returnToHome(){
        history.push('/user')
    }
    return (
        <>
            <h1>Route <span> {route[0]?.route_number}</span></h1>
            <section className="AvailableRoutes">
            {route.map((properties, index) => 
                <RouteProperties key={index} id={properties?.id} number={properties?.route_number} type={properties?.address_type} name={properties?.property_name}
                    street={properties?.street} city={properties?.city} state={properties?.state} zip={properties?.zip}/>
            )}
            <button onClick={returnToHome} >Submit Timecard for Route: <span>{route[0]?.route_number}</span></button>
            </section>
        </>

    );
}

export default StartRoute;