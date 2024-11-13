import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { X } from 'lucide-react';
import QrDataDialog from './QrDataDialog';
import { IQR } from '@/lib/types/qr.types';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/contexts/AuthContext';
import { finishGame, markLocation } from '@/lib/userActions';
import { toast } from 'sonner';
import { decryptQr } from '@/lib/utils';
import { hasVisitedAllCategories } from '@/lib/userActions';

const QrReader = () => {
  const {user, userData, updateUserData} = useAuth()
  const navigate = useNavigate();

  const [result, setResult] = useState<IQR | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [qrPaused, setQrPaused] = useState(false);

  const handleScan = (data: IDetectedBarcode[]) => {
    const _result = JSON.parse(decryptQr(data[0].rawValue)) as IQR;

    if (_result.source !== 'ciudad-15-minutos') {
      return
    }

    //Si es para marcar la ubicación, se muestra el diálogo
    if (_result.event === 'mark-location') {
      setResult(_result);
      setOpenDialog(true);
      setQrPaused(true); // Pausamos el escáner para evitar que se vuelva a leer el código QR
    }

    //Si es para finalizar el juego, se redirige a la pantalla de finalización
    if (_result.event === 'finish-game') {
      if (!userData || !user) return

      const {uid} = user
      const {locationVisited} = userData
      // Si el usuario ha visitado todas las categorías, se redirige a la pantalla de finalización
      if (locationVisited && hasVisitedAllCategories(locationVisited)) {
        try {
          finishGame({userId: uid})
          updateUserData({...userData, isFinalized: true})
          redirectToFinishGame()
        } catch (error) {
          toast.error('Error al finalizar el juego: ' + error)
        }
      } else {
        // Si el usuario no ha visitado todas las categorías, se muestra un toast
        toast.error('No has visitado todas las categorías')
      }
    }
  };

  const closeDialog = ()=>{
    setResult(null);
    setOpenDialog(false);
    setQrPaused(false);
  }

  const handleConfirm = () => {
    //Acá hay que cargar los datos del usuario
    // Referencia al documento
    if (user && result && userData){
      const markingLocation = markLocation({
        userData, 
        userId: user.uid,
        cat: result.category || '',
        subCat: result.subcategory || '',
      })

      toast.promise(markingLocation, {
        loading: 'Marcando ubicación...',
        success: (result) => {
          //redirect to game
          redirectToGame()

          //actualiza todo el objeto, mejorar para actualizar solo las ubicaciones
          updateUserData(result)

          return 'Ubicación marcada correctamente';
        },
        error: (error) => error.message
      })
    }
  }

  const redirectToGame = () => {
    closeDialog()
    navigate('/juego')
  }

  const redirectToFinishGame = () => {
    closeDialog()
    navigate('/finalizar-juego')
  }

  return (
    <div className={`fixed inset-0 ${!open ? 'hidden' : 'block'} z-50`}>
      <div className='absolute top-0 left-0 z-30 p-2' onClick={redirectToGame}>
        <X strokeWidth={0.5} color='white' size={40}/>
      </div>
      {/* Componente del escáner */}
      <Scanner
        onScan={handleScan}
        paused={qrPaused}
        allowMultiple
        components={{}}
        styles={{
          container: {
            width: '100%',
            height: '100%',
            position: 'relative',
            overflow: 'hidden',
          },
          video: {
            width: '100%',
            height: '100%',
            objectFit: 'cover', // Para que el video llene la pantalla manteniendo las proporciones
          },
          finderBorder: 15,
        }}
      />

    <QrDataDialog 
      open={openDialog} 
      onClose={closeDialog} 
      data={result} 
      handleConfirm={handleConfirm}
    />
  </div>
  );
};

export default QrReader;
