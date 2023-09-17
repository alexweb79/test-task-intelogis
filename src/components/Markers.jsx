import {Marker} from 'react-leaflet';
import {icons} from '../constants/icons';

const Markers = ({ markers }) => {
    return markers.map((pos, index) => (
        <Marker
            key={`marker-${index}`}
            position={[ pos[1], pos[0] ]}
            icon={icons}
        />
    ));
}

export {Markers};
