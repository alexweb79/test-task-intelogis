import {useSelector} from 'react-redux';
import {latLngBounds} from 'leaflet';
import {MapContainer, Polyline, TileLayer, useMap} from 'react-leaflet';
import {tileLayer} from '../constants/tileLayer';
import {Markers} from './Markers';
import {markersSelector, waypointsSelector} from '../redux/selectors';
import 'leaflet/dist/leaflet.css';

const zoom = 11;
const center = [0,0];

const SetViewOnChangeRoute = ({ markers }) => {
    const map = useMap();
    let markerBounds = latLngBounds([]);

    if (markers.length && markers.length > 0){
        markers.forEach(marker => {
            markerBounds.extend([marker[1], marker[0]]);
        })
        map.fitBounds(markerBounds);
    }

    return null;
}

const RouteMap = () => {
    const markers = useSelector(markersSelector);
    const waypoints = useSelector(waypointsSelector);

    return (
        <MapContainer
            center={center}
            zoom={zoom}
            scrollWheelZoom={false}
            className="markercluster-map"
            style={{height: "100vh"}}
            attributionControl={false}
        >
            <TileLayer {...tileLayer} />
            <Polyline
                color={'green'}
                opacity={1}
                weight={4}
                positions={waypoints}
            />
            <Markers markers={markers} />
            <SetViewOnChangeRoute markers={markers}/>
        </MapContainer>
    )
}

export {RouteMap};
