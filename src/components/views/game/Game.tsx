import ThemeButton from '@/components/common/ThemeButton';
import CategoryWrapper from '@/components/features/game/category/CategoryWrapper';
import { AdvancedMarker, Map } from '@vis.gl/react-google-maps';
import { Hourglass, House, QrCode, Undo2} from 'lucide-react';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {locations} from "@/lib/data/locations.json"
// import { colorCategoryDictionary } from '@/lib/utils.string';
import { Location } from '@/lib/types/location.types';
import UserMarker from '@/components/features/game/map/UserMarker';
import { useAuth } from '@/components/contexts/AuthContext';
import { toast } from 'sonner';
import { hasVisitedAllCategories } from '@/lib/userActions';
import { categories } from '@/lib/data/categories';
import { gameSettings } from '@/lib/utils';
import GameCountdown from '@/components/features/game/GameCountdown';
// import { categories } from '@/lib/data/categories';

const squarePosition = { lat: -32.88943218488501, lng: -68.84481014373047 };

const Game = () => {
  const navigate = useNavigate();
  const {userData} = useAuth()

  const [isMounted, setIsMounted] = useState(false);
  const [timeIsFinalized, setTimeIsFinalized] = useState(false);
  const [showCountdown, setShowCountdown] = useState(false);
  const [visibility, setVisibility] = useState<{ [key: string]: boolean }>({
    comercio: true,
    equipamiento_basico: true,
    espacios_verdes: true,
    movilidad: true,
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

  const handleTimeFinalized = () => {
    setTimeIsFinalized(true);
  }

  useEffect(() => {
    // Initialize empty array for filtered locations
    let filteredLocations: Location[] = [];

    // Return early if no user data
    if (!userData) return

    // Filter locations based on visibility settings
    const filteredLocationsByVisibility = locations.filter(({category}) => visibility[category]);
    filteredLocations = filteredLocationsByVisibility;

    // If user has visited locations, filter out already visited ones
    if (userData.locationVisited) {
      const {locationVisited} = userData;
      const filteredLocationsByVisited: Location[] = [];

        // Loop through locations and only keep unvisited ones
        for (const location of filteredLocations) {
          const category = location.category;
          const subcategory = location.subcategory;

          if (!locationVisited[category][subcategory]) {
            filteredLocationsByVisited.push(location)
          }
        }
      filteredLocations = filteredLocationsByVisited;
    }

    // Update state with filtered locations
    setRenderLocations(filteredLocations)
  }, [visibility, userData])


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

  const toggleCountdown = () => {
    setShowCountdown(!showCountdown);
  }

  // Add useEffect for mounting
  useEffect(() => {
    setIsMounted(true);
    return () => setIsMounted(false);
  }, []);

  return isMounted && (
    <>
      <div className='w-full relative' style={{height: '-webkit-fill-available'}}>
        
          <div className='absolute w-full h-full flex flex-col'>
            <GameCountdown endDate={gameSettings.date.end} showCountdown={showCountdown} onFinish={handleTimeFinalized}/>
            <div className='flex-1 relative'>
              <button onClick={redirectToLobby} className='text-white z-50 absolute top-[10px] right-[10px] w-[60px] h-[60px] rounded-full cursor bg-background-secondary flex items-center justify-center'>
                <House size={26}/>
              </button>
              <button onClick={toggleCountdown} className='text-white z-50 absolute top-[10px] right-[75px] w-[60px] h-[60px] rounded-full cursor bg-background-secondary flex items-center justify-center'>
                <Hourglass size={26}/>
              </button>
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
              {renderLocations.map(({category, coord, name, id, subcategory}) => {
                // const {background, borderColor, glyphColor} = colorCategoryDictionary(category)
                const _category = categories.find((cat) => cat.name === category)

                if (!_category) return null;

                const icons = _category.subcategories.find((sub) => sub.name === subcategory)?.icons

                if (!icons) return null;
                return (
                  <AdvancedMarker
                    key={id}
                    position={{ lat: coord.lat, lng: coord.long }}
                    // Puedes agregar un title o un evento onClick para mostrar más detalles de la ubicación
                    title={name}
                    className='absolute'
                  >
                    <div className='flex items-center justify-center'>
                      <img src={icons.enable} alt={category} width={35} height={35} />
                    </div>
                  </AdvancedMarker>
                )
              })}
              </Map> 
            </div>
          </div>
          <ThemeButton disabled={userData?.isFinalized || timeIsFinalized} onClick={redirecToScanner} className='absolute bottom-4 left-1/2 transform -translate-x-1/2 text-xl p-6 items-center flex gap-4'>
            Escanear <QrCode size={32}/>
          </ThemeButton>
          <CategoryWrapper visibility={visibility} handleVisibility={handleVisibility}/>
      </div>
    </>
  );
};

export default Game;