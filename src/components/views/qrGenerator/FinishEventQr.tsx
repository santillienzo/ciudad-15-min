import { QRCodeSVG } from "qrcode.react";
import background from '../../../assets/svg/Edificios.svg'
import { encryptQr } from "@/lib/utils";


const FinishEventQr = () => {
  return (
    <div className="h-screen w-full">
        <div className="flex flex-col justify-center items-center h-full bg-background-primary">
            <h1 className="text-[10vmin] font-bold p-4 pt-10 text-center text-white">¡Escaneá el siguiente QR para finalizar el juego!</h1>
            <div className="flex flex-1 justify-center items-center w-full relative">
                <QRCodeSVG 
                    value={encryptQr(JSON.stringify({
                        source: "ciudad-15-minutos",
                        event: "finish-game"
                    }))} 
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

export default FinishEventQr