import {ActionTypes} from '../constants';

const setRoutes = (payload) => ({
    type: ActionTypes.SET_ROUTES,
    payload,
})

const getTableRoutes = () => ({
    type: ActionTypes.GET_TABLE_ROUTES
})

const setTableData = (payload) => ({
    type: ActionTypes.SET_TABLE_DATA,
    payload,
})

const setTableColumns = (payload) => ({
    type: ActionTypes.SET_TABLE_COLUMNS,
    payload,
})

const getMapRoute = (payload) => ({
    type: ActionTypes.GET_MAP_ROUTE,
    payload,
})

const setMarkers = (payload) => ({
    type: ActionTypes.SET_MARKERS,
    payload,
})

const clearMarkers = () => ({
    type: ActionTypes.CLEAR_MARKERS
})

const getWaypoints = (payload) => ({
    type: ActionTypes.GET_WAYPOINTS,
    payload
})

const setWaypoints = (payload) => ({
    type: ActionTypes.SET_WAYPOINTS,
    payload,
})

const clearWaypoints = () => ({
    type: ActionTypes.CLEAR_WAYPOINTS
})

const Actions = {
    setRoutes,
    getTableRoutes,
    setTableData,
    setTableColumns,
    getMapRoute,
    setMarkers,
    clearMarkers,
    getWaypoints,
    setWaypoints,
    clearWaypoints
}

export {Actions}
