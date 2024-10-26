import ThemeButton from '@/components/common/ThemeButton';
import CategoryWrapper from '@/components/features/game/category/CategoryWrapper';
import { AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import { House, QrCode } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const position = {lat: -32.88943218488501, lng: -68.84481014373047};

const Game = () => {
  const navigate = useNavigate();

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

    const redirecToScanner = ()=> {
      navigate('/scanner');
    }

    const redirectToLobby = ()=> {
      navigate('/game-lobby');
    }

  return (
    <>
      <div className='w-full relative' style={{height: '-webkit-fill-available'}}>
          <button onClick={redirectToLobby} className='text-white z-50 absolute top-[10px] right-[10px] w-[60px] h-[60px] rounded-full cursor bg-background-secondary flex items-center justify-center'>
            <House size={26}/>
          </button>
          <div className='absolute w-full h-full'>
            <Map 
              defaultCenter={currentPosition} 
              defaultZoom={15} 
              mapId='DEMO_MAP_ID'
              fullscreenControl={false}
              clickableIcons={false}
              streetViewControl={false}
            >
              <AdvancedMarker position={currentPosition} />
            </Map> 
          </div>
          <ThemeButton onClick={redirecToScanner} className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl p-6 items-center flex gap-4'>
            Escanear <QrCode size={32}/>
          </ThemeButton>
          <CategoryWrapper/>
      </div>
    </>
  )
}

export default Game