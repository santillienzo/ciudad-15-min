import { IDetectedBarcode, Scanner } from '@yudiel/react-qr-scanner';
import { useState } from 'react';
import { X } from 'lucide-react';
import QrDataDialog from './QrDataDialog';
import { IQR } from '@/lib/types/qr.types';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '@/components/contexts/AuthContext';
import { markLocation } from '@/lib/location';
import { toast } from 'sonner';

const QrReader = () => {
  const {user, userData, updateUserData} = useAuth()
  const navigate = useNavigate();

  const [result, setResult] = useState<IQR | null>(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [qrPaused, setQrPaused] = useState(false);

  const handleScan = (data: IDetectedBarcode[]) => {
    const _result = JSON.parse(data[0].rawValue) as IQR;

    if (_result.source !== 'ciudad-15-minutos') {
      return
    }

    setResult(_result);
    setOpenDialog(true);
    setQrPaused(true); // Pausamos el escáner para evitar que se vuelva a leer el código QR
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
        cat: result.category,
        subCat: result.subcategory,
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
