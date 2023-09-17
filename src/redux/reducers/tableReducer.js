import {ActionTypes} from '../constants';

const initialState = {
    tableData: [],
    tableColumns: []
}

const tableReducer = (state = initialState, action) => {
    switch (action.type) {
        case ActionTypes.SET_TABLE_DATA: {
            return {
                ...state,
                tableData: [...state.tableData, ...action.payload]
            }
        }
        case ActionTypes.SET_TABLE_COLUMNS: {
            return {
                ...state,
                tableColumns: [...state.tableColumns, ...action.payload]
            }
        }
        default:
            return state
    }
}

export {tableReducer}
