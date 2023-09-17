import {osrmApiRoute} from './api';

const params = {
    alternatives: false,
    steps: false,
    annotations: false,
    geometries: 'geojson',
    overview: 'full',
    continue_straight: 'default'
}

export const fetchWaypoints = async (data) => {
    try {
        const res = await osrmApiRoute.get(`/driving/${data}`, {params});
        if (res.status !== 200) {
            throw new Error(`Error: ${res.statusText}, with status: ${res.status}`);
        }
        return res.data.routes[0].geometry.coordinates;
    } catch (err) {
        throw new Error(`Failed to fetch Waypoints ${err}`);
    }
}
