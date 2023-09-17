import React, {useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {Table} from 'antd';
import {Actions} from '../redux/actions/actionCreator';
import {tableColumnsSelector, tableDataSelector} from '../redux/selectors';

const RoutesTable = ({rowKey, getRoute}) => {
    const tableData = useSelector(tableDataSelector);
    const tableColumns = useSelector(tableColumnsSelector);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(Actions.getTableRoutes());
    }, [dispatch]);

    return (
        <>
            {
                tableData.length && tableColumns.length &&
                <Table
                    dataSource={tableData}
                    columns={tableColumns}
                    pagination={false}
                    rowClassName={(record) => record.key === rowKey ? 'ant-table-row-selected' : ''}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: (event) => getRoute(record),
                        };
                    }}
                />
            }
        </>
    );
};

export {RoutesTable};
