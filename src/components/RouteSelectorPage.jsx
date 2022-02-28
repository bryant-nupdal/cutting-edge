import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router';
import Route from './Route';

function routeList() {

    const dispatch = useDispatch();
    const history = useHistory();
    const routes = useSelector(store => store.routes);
    
    useEffect(() => {
        dispatch({ type: 'GET_ALL_ROUTES' });
    }, []);

    return (
        <>
            <h1>Available Routes</h1>
            <section className="AvailableRoutes">
            {routes.map((route, index) => 
                <Route key={index} id={route.id} number={route.number} />
            )}
            </section>
        </>

    );
}

export default routeList;