import {ActionTypes} from '../constants';

const initialState = {
    markers: []
}

const markersReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_MARKERS: {
            return {
                ...state,
                markers: [...state.markers, ...action.payload]
            }
        }
        case ActionTypes.CLEAR_MARKERS: {
            return {
                ...state,
                ...initialState
            }
        }
        default:
            return state
    }
}

export {markersReducer}
