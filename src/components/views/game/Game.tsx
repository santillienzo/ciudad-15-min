import ThemeButton from '@/components/common/ThemeButton';
import CategoryWrapper from '@/components/features/game/category/CategoryWrapper';
import { AdvancedMarker, Map, Pin } from '@vis.gl/react-google-maps';
import { House, QrCode} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {locations} from "@/lib/data/locations.json"
import { colorCategoryDictionary } from '@/lib/utils.string';
import { Location } from '@/lib/types/location.types';
import UserMarker from '@/components/features/game/map/UserMarker';

const position = { lat: -32.88943218488501, lng: -68.84481014373047 };

const Game = () => {
  const navigate = useNavigate();
  const [visibility, setVisibility] = useState<{ [key: string]: boolean }>({
    comercio: true,
    equipamiento_basico: false,
    espacios_verdes: false,
    movilidad: false,
  });
  const [renderLocations, setRenderLocations] = useState<Location[]>([]);
  
  const [currentPosition, setCurrentPosition] = useState<{
    lat: number;
    lng: number;
  }>(position);
  const [isMapDragged, setIsMapDragged] = useState(false);

  const handleVisibility = (category: string) => {
    setVisibility({
      ...visibility,
      [category]: !visibility[category]
    });
  };

  useEffect(() => {
    setRenderLocations(locations.filter(({category}) => visibility[category]))
  }, [visibility])

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
    navigate("/lector-qr");
  };

  const redirectToLobby = ()=> {
    navigate('/lobby-juego');
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
              {/* Pin de la ubicación actual */}
              <UserMarker currentPosition={currentPosition}/>

              {/* Acá van los pins de las ubicaciones */}
              {renderLocations.map(({category, coord, name, id}) => {
                const {background, borderColor, glyphColor} = colorCategoryDictionary(category)

                return (
                  <AdvancedMarker
                    key={id}
                    position={{ lat: coord.lat, lng: coord.long }}
                    // Puedes agregar un title o un evento onClick para mostrar más detalles de la ubicación
                    title={name}
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
            </Map> 
          </div>
          <ThemeButton onClick={redirecToScanner} className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl p-6 items-center flex gap-4'>
            Escanear <QrCode size={32}/>
          </ThemeButton>
          <CategoryWrapper visibility={visibility} handleVisibility={handleVisibility}/>
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
