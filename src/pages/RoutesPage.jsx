import React, {useState} from 'react';
import {Col, Row} from 'antd';
import {RoutesTable} from '../components/RoutesTable';
import {RouteMap} from '../components/RouteMap';
import {useDispatch} from 'react-redux';
import {Actions} from '../redux/actions/actionCreator';

const RoutesPage = () => {
    const [rowKey, setRowKey] = useState(null);
    const dispatch = useDispatch();

    const getRoute = async (record) => {
        setRowKey(record.key);
        dispatch(Actions.getMapRoute(record));
    }

    return (
        <Row gutter={[8, 8]} align="middle">
            <Col xs={24} xl={12}>
                <RoutesTable
                    rowKey={rowKey}
                    getRoute={getRoute}
                />
            </Col>
            <Col xs={24} xl={12}>
                <RouteMap/>
            </Col>
        </Row>
    );
}

export {RoutesPage};
