import ThemeButton from '@/components/common/ThemeButton';
import CategoryWrapper from '@/components/features/game/category/CategoryWrapper';
import { AdvancedMarker, Map, Pin } from '@vis.gl/react-google-maps';
import { House, QrCode, Undo2} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {locations} from "@/lib/data/locations.json"
import { colorCategoryDictionary } from '@/lib/utils.string';
import { Location } from '@/lib/types/location.types';
import UserMarker from '@/components/features/game/map/UserMarker';
import { useAuth } from '@/components/contexts/AuthContext';
import { toast } from 'sonner';
import { hasVisitedAllCategories } from '@/lib/userActions';
// import { categories } from '@/lib/data/categories';

const squarePosition = { lat: -32.88943218488501, lng: -68.84481014373047 };

const Game = () => {
  const navigate = useNavigate();
  const {userData} = useAuth()

  const [isMounted, setIsMounted] = useState(false);
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
  }>(squarePosition);
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

  useEffect(() => {
    if (!isMounted || !userData) return
    
    if (userData.locationVisited) {
      const {locationVisited, isFinalized} = userData
      if (hasVisitedAllCategories(locationVisited) && !isFinalized) {
        toast('Es hora de volver', {
          description: 'Regresá a Plaza Independencia y escaneá el QR final.',
          className: 'gap-4 bg-background-primary text-white',
          classNames: {
            closeButton: 'top-2 left-2 border-none',
          },
          icon: <Undo2 size={24}/>,
          closeButton: true,
          duration: Infinity,
        });
      }
    }
  }, [userData, isMounted])

  const handleCenterChanged = () => {
    if (!isMapDragged) {
      setIsMapDragged(true);
    }
  };

  const redirecToScanner = () => {
    navigate("/lector-qr");
  };

  const redirectToLobby = ()=> {
    navigate('/lobby');
  }

  // Add useEffect for mounting
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted && (
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
                // const iconCategory = categories.find(({name}) => name === category)?.icons.enable

                return (
                  <AdvancedMarker
                    key={id}
                    position={{ lat: coord.lat, lng: coord.long }}
                    // Puedes agregar un title o un evento onClick para mostrar más detalles de la ubicación
                    title={name}
                    className='absolute'
                  >
                    <Pin
                      background={background}   // Color de fondo según la categoría
                      borderColor={borderColor}    // Borde blanco
                      glyphColor={glyphColor}     // Color del texto o símbolo si decides usarlo
                      scale={1.5}
                      // glyph={<img src={iconCategory} alt={category}/>}
                    />
                  </AdvancedMarker>
                )
              })}
            </Map> 
          </div>
          <ThemeButton disabled={userData?.isFinalized} onClick={redirecToScanner} className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl p-6 items-center flex gap-4'>
            Escanear <QrCode size={32}/>
          </ThemeButton>
          <CategoryWrapper visibility={visibility} handleVisibility={handleVisibility}/>
      </div>
    </>
  );
};

export default Game;