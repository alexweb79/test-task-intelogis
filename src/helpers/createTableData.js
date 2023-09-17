const createTableData = (routes) => {
    const dataArr = [];
    const dataObj = {};
    routes.forEach((route, i) => {
        const index = i+1;
        dataObj[i] = {
            key: `table-data-key-${index}`,
            name: `Маршрут №${index}`
        }
        route.forEach((point, j) => dataObj[i][`point${j+1}`] = `${point.lat},\n ${point.lng}`);
        dataArr.push(dataObj[i]);
    })
    return dataArr;
}

export {createTableData}
