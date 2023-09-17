import {combineReducers} from '@reduxjs/toolkit';
import {routesReducer} from './routesReducer';
import {tableReducer} from './tableReducer';
import {markersReducer} from './markersReducer';
import {waypointsReducer} from './waypointsReducer';

const reducer = combineReducers({
    routesReducer,
    tableReducer,
    markersReducer,
    waypointsReducer
})

export {reducer}
