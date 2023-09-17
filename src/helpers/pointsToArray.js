const pointsToArray = (points) => {
    return points.map(p => p.split(',').map(el => Number(el.trim())));
}

export {pointsToArray}
