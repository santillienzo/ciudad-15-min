import ThemeButton from '@/components/common/ThemeButton';
import CategoryWrapper from '@/components/features/game/category/CategoryWrapper';
import { AdvancedMarker, Map, Pin } from '@vis.gl/react-google-maps';
import { House, QrCode } from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {locations} from "@/lib/data/locations.json"
import { colorCategoryDictionary } from '@/lib/utils.string';

const position = { lat: -32.88943218488501, lng: -68.84481014373047 };

const Game = () => {
  const navigate = useNavigate();

  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  }>(position);
  const [isMapDragged, setIsMapDragged] = useState(false);

  useEffect(() => {
    if ("geolocation" in navigator) {
      const watcher = navigator.geolocation.watchPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCurrentPosition({
            lat: latitude,
            lng: longitude,
          });
        },
        (error) => {
          console.error("Error obteniendo la geolocalización: ", error);
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

  const handleCenterChanged = () => {
    if (!isMapDragged) {
      setIsMapDragged(true);
    }
  };

  const redirecToScanner = () => {
    navigate("/scanner");
  };

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
              center={!isMapDragged ? currentPosition : undefined}
              onDragstart={handleCenterChanged}
              defaultZoom={15} 
              mapId='DEMO_MAP_ID'
              fullscreenControl={false}
              clickableIcons={false}
              streetViewControl={false}
            >
              {/* Acá van los pins de las ubicaciones */}
              {locations.map(location => {
                const {background, borderColor, glyphColor} = colorCategoryDictionary(location.category)

                return (
                  <AdvancedMarker
                    key={location.id}
                    position={{ lat: location.coord.lat, lng: location.coord.long }}
                    // Puedes agregar un title o un evento onClick para mostrar más detalles de la ubicación
                    title={location.name}
                    className='relative'
                  >
                    <Pin
                      background={background}   // Color de fondo según la categoría
                      borderColor={borderColor}    // Borde blanco
                      glyphColor={glyphColor}     // Color del texto o símbolo si decides usarlo
                      scale={1.5}
                    />
                  </AdvancedMarker>
                )
              })}

              <AdvancedMarker position={currentPosition} />
            </Map> 
          </div>
          <ThemeButton onClick={redirecToScanner} className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl p-6 items-center flex gap-4'>
            Escanear <QrCode size={32}/>
          </ThemeButton>
          <CategoryWrapper/>
      </div>
    </>
  );
};

export default Game;

// import ThemeButton from '@/components/common/ThemeButton';
// import { AdvancedMarker, Map } from '@vis.gl/react-google-maps';
// import { QrCode } from 'lucide-react';
// import { useEffect, useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const position = {lat: -32.88943218488501, lng: -68.84481014373047};
// const Game = () => {
//   const navigate = useNavigate();

//     const [currentPosition, setCurrentPosition] = useState<{ lat: number; lng: number }>(position);

//     useEffect(() => {
//       if ('geolocation' in navigator) {
//         const watcher = navigator.geolocation.watchPosition(
//           (position) => {
//             const { latitude, longitude } = position.coords;
//             setCurrentPosition({
//               lat: latitude,
//               lng: longitude,
//             });
//           },
//           (error) => {
//             console.error('Error obteniendo la geolocalización: ', error);
//           },
//           {
//             enableHighAccuracy: true, // Mayor precisión (consume más batería)
//             maximumAge: 10000, // No obtener ubicaciones anteriores a 10 segundos
//             timeout: 5000, // Tiempo máximo para esperar una respuesta
//           }
//         );

//         // Limpia el watcher cuando el componente se desmonte
//         return () => navigator.geolocation.clearWatch(watcher);
//       }
//     }, []);

//     const redirecToScanner = ()=> {
//       navigate('/scanner');
//     }

//   return (
//     <>
//       <div className='w-full relative' style={{height: '-webkit-fill-available'}}>
//           <div className='absolute w-full h-full'>
//             <Map
//               defaultCenter={currentPosition}
//               defaultZoom={15}
//               mapId='DEMO_MAP_ID'
//             >
//               <AdvancedMarker position={currentPosition} />
//             </Map>
//           </div>
//           <ThemeButton onClick={redirecToScanner} className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl p-6 items-center flex gap-4'>
//             Escanear <QrCode size={32}/>
//           </ThemeButton>
//       </div>
//     </>
//   )
// }

// export default Game
