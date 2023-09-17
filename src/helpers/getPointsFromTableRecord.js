const getPointsFromTableRecord = (record) => {
    const points = [];
    Object.entries(record).forEach(([key, value], index) => {
        if (key.replace(/[0-9]/g, '') === 'point') {
            points.push(value);
        }
    })
    return points;
}

export {getPointsFromTableRecord}
