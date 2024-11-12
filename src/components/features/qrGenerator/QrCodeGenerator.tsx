import { QRCodeSVG } from "qrcode.react";
import React, { useEffect, useRef, useState } from "react";
import qrInfo from "@/lib/data/locations.json";
import { useReactToPrint } from "react-to-print";
import { Button } from "@chakra-ui/react";
import { Location } from "@/lib/types/location.types";
// import QRCode from "react-qr-code";

interface QRData extends Location {
  source: string;
}

const QrCodeGenerator: React.FC = () => {
  const [qrCodes, setQrCodes] = useState<QRData[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({
    contentRef,
  });
  

  useEffect(() => {
    setQrCodes(qrInfo.locations.map(location =>{
      return {
        ...location,
        source: 'ciudad-15-minutos'
      }
    })); // Carga los primeros 50 códigos QR
  }, []);

  return (
    <div>
      <div className="mb-6">
        <h2 className="text-3xl text-center">QrCodeGen App</h2>
        <div className="flex justify-center">
          <Button
            onClick={()=> reactToPrintFn()}
            style={{
              textAlign: "center",
              textDecoration: "none",
              marginTop: "10px",
              border: "2px solid #333",
              borderRadius: "5px",
              backgroundColor: "slateblue",
              color: "#fff",
              fontWeight: "bold",
              height: "2rem",
              padding: "0 1rem",
            }}
          >
            Imprimir / Guardar PDF
          </Button>
        </div>
      </div>
      <div ref={contentRef} className="m-auto pt-2">
        {qrCodes.map((item, index) => (
                  <div key={index} className="h-full border-2 border-gray-300 mb-1 flex justify-between p-5">
                    <div className="mb-6 w-1/2">
                      <h3 className="font-bold text-5xl mb-6 block">{`${item.name}`}</h3>
                      <p className="text-xs">{`${item.direction ? item.direction : '-'}`}</p>
                    </div>
                    <div id={`qr-code-${item.id}`} className="flex justify-center items-center  w-1/2">
                      <QRCodeSVG
                        value={JSON.stringify({
                            id: item.id,
                            source: item.source,
                            name: item.name,
                            direction: item.direction,
                            category: item.category,
                            subcategory: item.subcategory,
                          })
                        }
                        level="L"
                        style={{
                          width: "100%" /* Ajustar a 100% del contenedor */,
                          height: "auto" /* Tamaño máximo en la web */,
                          maxWidth: "300px"
                        }}
                      />
                    </div>
                  </div>
                ))}
      </div>
    </div>
  );
};

export default QrCodeGenerator;
