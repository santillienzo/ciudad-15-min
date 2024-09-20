import { MAPS_API_KEY } from '@/lib/config';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';

const position = {lat: 53.54992, lng: 10.00678};

const Game = () => {
  return (
    <div className='h-screen w-full'>
        <APIProvider apiKey={MAPS_API_KEY}>
        <Map defaultCenter={position} defaultZoom={10} mapId='DEMO_MAP_ID'>
            <AdvancedMarker position={position} />
        </Map>
        </APIProvider>
    </div>
  )
}

export default Game