import {all} from 'redux-saga/effects';
import {watchGetTableRoutes} from './getTableRoutesSaga';
import {watchGetMapRoute} from './getMapRouteSaga';

export function* rootSaga() {
    yield all([
        watchGetTableRoutes(),
        watchGetMapRoute(),
    ])
}
