import {call, put, takeLatest} from 'redux-saga/effects';
import {Actions} from '../actions/actionCreator';
import {ActionTypes} from '../constants';
import {fetchRoutes} from '../../services/dataApi/fetchRoutes';
import {createTableData} from '../../helpers/createTableData';
import {createTableColumns} from '../../helpers/createTableColumns';

function* workerGetTableRoutes() {
    const res = yield call(fetchRoutes);
    yield put(Actions.setRoutes(res));

    const tableData = createTableData(res);
    yield put(Actions.setTableData(tableData));

    const tableColumns = createTableColumns(res);
    yield put(Actions.setTableColumns(tableColumns));
}

export function* watchGetTableRoutes() {
    yield takeLatest(ActionTypes.GET_TABLE_ROUTES, workerGetTableRoutes);
}
