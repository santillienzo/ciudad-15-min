import { QRCodeSVG } from "qrcode.react";
import background from '../../../assets/svg/Edificios.svg'


const GameQr = () => {
  return (
    <div className="h-screen w-full">
        <div className="flex flex-col justify-center items-center h-full bg-background-primary">
            <h1 className="text-[10vmin] font-bold p-4 pt-10 text-center text-white">¡Escaneá el siguiente QR para dirigirte al juego!</h1>
            <div className="flex flex-1 justify-center items-center w-full relative">
                <QRCodeSVG 
                    value={`${window.location.origin}/juego`} 
                    width={'45vmin'} 
                    height={'45vmin'}
                    className="z-10"
                />
                <img src={background} alt="background" className="absolute bottom-0 left-0 w-full opacity-30" />
            </div>
        </div>
    </div>
  )
}

export default GameQr