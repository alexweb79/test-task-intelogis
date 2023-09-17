const pointsToString = (points) => {
    let str = '';
    points.forEach((point, index) => {
        str += point.replace(/\s/g, '') + (points.length - 1 !== index ? ';' : '');
    })
    return str;
}

export {pointsToString}
