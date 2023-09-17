const createTableColumns = (routes) => {
    const columnsArr = [];
    const columnsObj = {};
    columnsObj[0] = {
        title: 'Маршрут',
        dataIndex: 'name',
        key: 'name',
    }
    columnsArr.push(columnsObj[0]);

    routes.forEach((route, i) => {
        const index = i+1;
        const point = `point${index}`;
        columnsObj[i+1] = {
            title: `Точка ${index} (lat, lng)`,
            dataIndex: point,
            key: point,
        }
        columnsArr.push(columnsObj[i+1]);
    })

    return columnsArr;
}

export {createTableColumns}
