import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router';
import Route from './Route';

function WorkOrderDetailsPage() {

    const dispatch = useDispatch();
    const history = useHistory();
    const routes = useSelector(store => store.routes);
    const workOrders = useSelector(store => store.workOrder);
    const params = useParams();
    const workOrderID = params.workorderID;
    const currentWorkOrder = workOrders.find(workOrder => workOrder.id === Number(workOrderID)
);

    useEffect(() => {
        console.log("inside use effect");
        if (currentWorkOrder) {
            dispatch({
                type: 'GET_TASKS_BY_WORK_ORDER',
                payload: currentWorkOrder.id
            });

            dispatch({
                type: 'FETCH_TIMECARD',
                payload: currentWorkOrder.id
            });
        }
    }, [currentWorkOrder]); // if currentWorkOrder changes, re-run this

    if (currentWorkOrder === undefined) {
        return <h1>Loading...</h1>
    }

    // TODO: Add a <ul> here instead, around the map
    return (
        <>
            <h1>Routes</h1>
            <hr />
            <ul className="AvailableRoutes">
                {routes.map((route, index) =>
                    <Route key={index} route={route} workOrderID={workOrderID} />
                )}
            </ul>
        </>
    );
}

export default WorkOrderDetailsPage;