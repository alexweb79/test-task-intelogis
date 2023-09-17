import {ActionTypes} from '../constants';

const initialState = {
    waypoints: []
}

const waypointsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_WAYPOINTS: {
            return {
                ...state,
                waypoints: [...state.waypoints, ...action.payload]
            }
        }
        case ActionTypes.CLEAR_WAYPOINTS: {
            return {
                ...state,
                ...initialState
            }
        }
        default:
            return state
    }
}

export {waypointsReducer}
