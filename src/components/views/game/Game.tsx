import ThemeButton from '@/components/common/ThemeButton';
import { MAPS_API_KEY } from '@/lib/config';
import { AdvancedMarker, APIProvider, Map } from '@vis.gl/react-google-maps';
import { QrCode } from 'lucide-react';
import { useEffect, useState } from 'react';

const position = {lat: -32.88943218488501, lng: -68.84481014373047};

const Game = () => {

    const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number }>(position);

    useEffect(() => {
      if ('geolocation' in navigator) {
        const watcher = navigator.geolocation.watchPosition(
          (position) => {
            const { latitude, longitude } = position.coords;
            setCurrentPosition({
              lat: latitude,
              lng: longitude,
            });
          },
          (error) => {
            console.error('Error obteniendo la geolocalización: ', error);
          },
          {
            enableHighAccuracy: true, // Mayor precisión (consume más batería)
            maximumAge: 10000, // No obtener ubicaciones anteriores a 10 segundos
            timeout: 5000, // Tiempo máximo para esperar una respuesta
          }
        );
  
        // Limpia el watcher cuando el componente se desmonte
        return () => navigator.geolocation.clearWatch(watcher);
      }
    }, []);

  return (
    <div className='w-full relative' style={{height: '-webkit-fill-available'}}>
        <div className='absolute w-full h-full'>
          <APIProvider apiKey={MAPS_API_KEY}>
              <Map defaultCenter={currentPosition} defaultZoom={15} mapId='DEMO_MAP_ID'>
                <AdvancedMarker position={currentPosition} />
              </Map>
          </APIProvider> 
        </div>
        <ThemeButton className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl p-6 items-center flex gap-4'>
          Escanear <QrCode size={32}/>
        </ThemeButton>
    </div>
  )
}

export default Game