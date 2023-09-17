import {ActionTypes} from '../constants';

const initialState = {
    routes: []
}

const routesReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_ROUTES: {
            return {
                ...state,
                routes: [...state.routes, ...action.payload]
            }
        }
        default:
            return state
    }
}

export {routesReducer}
