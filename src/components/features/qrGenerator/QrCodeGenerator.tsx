import { QRCodeSVG } from "qrcode.react";
import React, { useEffect, useRef, useState } from "react";
import qrInfo from "@/lib/data/locations.json";
import { useReactToPrint } from "react-to-print";
import { Button } from "@chakra-ui/react";
// import QRCode from "react-qr-code";

interface QRData {
  id: string;
  source: string;
  name: string;
  category: string;
  subcategory: string;
  direction?: string;
  coord: {
    lat: number;
    long: number;
  }
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
    <>
      <div>
        <div className="w-[90%] px-[2rem]">
          <h2 className="text-3xl text-center">QrCodeGen App</h2>
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
        <div ref={contentRef}>
          <div className="qrcode-container">
            {qrCodes.map((item, index) => (
              <div key={index} className="qrcode-item">
                <div
                  style={{
                    backgroundColor: "#fff",
                    width: "100%",
                    height: "auto",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                    alignItems: "center",
                    paddingBottom: "2rem",
                  }}
                >
                  <h3>{`${item.name}`}</h3>
                  <div id={`qr-code-${item.id}`}>
                    <QRCodeSVG
                      value={`{
                          "id": "${item.id}",
                          "source": "${item.source}",
                          "name": "${item.name}",
                          "category": "${item.category}",
                          "subcategory": "${item.subcategory}",
                        }`
                      }
                      level="L"
                      style={{
                        width: "100%" /* Ajustar a 100% del contenedor */,
                        height: "auto",
                        maxWidth: "200px" /* Tamaño máximo en la web */,
                      }}
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default QrCodeGenerator;
