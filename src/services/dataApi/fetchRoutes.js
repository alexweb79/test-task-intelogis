import axios from 'axios';

const DATA_API_ENDPOINT = process.env.REACT_APP_DATA_API_ENDPOINT || 'https://alexweb79.github.io/test-task-intelogis';

export const fetchRoutes = async () => {
    try {
        const res = await axios.get(`${DATA_API_ENDPOINT}/data.json`);
        if (res.status !== 200) {
            throw new Error(`Error: ${res.statusText}, with status: ${res.status}`);
        }
        return res.data.routes;
    } catch (err) {
        throw new Error(`Failed to fetch routes ${err}`);
    }
}
