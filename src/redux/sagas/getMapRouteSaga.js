import {call, put, takeLatest} from 'redux-saga/effects';
import {Actions} from '../actions/actionCreator';
import {ActionTypes} from '../constants';
import {fetchWaypoints} from '../../services/osrmApi/fetchWaypoints';
import {getPointsFromTableRecord} from '../../helpers/getPointsFromTableRecord';
import {pointsToString} from '../../helpers/pointsToString';
import {pointsToArray} from '../../helpers/pointsToArray';

function* workerGetMapRoute(action) {
    const points = getPointsFromTableRecord(action.payload);

    const pointsArray = pointsToArray(points);
    yield put(Actions.clearMarkers());
    yield put(Actions.setMarkers(pointsArray));

    const pointsString = pointsToString(points);
    const res = yield call(fetchWaypoints, pointsString);
    const resRevert = res.map(r => r.reverse());
    yield put(Actions.clearWaypoints());
    yield put(Actions.setWaypoints(resRevert));
}

export function* watchGetMapRoute() {
    yield takeLatest(ActionTypes.GET_MAP_ROUTE, workerGetMapRoute);
}
