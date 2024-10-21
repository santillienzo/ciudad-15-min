import { QRCodeSVG } from "qrcode.react";
import React, { useEffect, useRef, useState } from "react";
import qrInfo from "./qr-info.json";
import { useReactToPrint } from "react-to-print";
import { Button } from "@chakra-ui/react";
// import QRCode from "react-qr-code";

interface QRData {
  location_id: number;
  source: string;
  name: string;
  type: string;
  subtype: string;
  direction: string;
  lat: number;
  long: number;
}

// interface Item {
//   id: string;
//   name: string;
// }

const QrCodeGenerator: React.FC = () => {
  const [qrCodes, setQrCodes] = useState<QRData[]>([]);
  // const [items, setItems] = useState<Item[]>([]);
  const contentRef = useRef<HTMLDivElement>(null);
  const reactToPrintFn = useReactToPrint({ contentRef });

  // Función para cargar el archivo JSON
  // const loadQRData = async () => {
  //   try {
  //     const response = await fetch(`${qrInfo}`);
  //     if (!response.ok) {
  //       throw new Error("Error al cargar los datos del JSON");
  //     }
  //     const qrData: QRData[] = await response.json();
  //     setQrCodes(qrData.slice(0, 50)); // Carga los primeros 50 códigos QR
  //   } catch (error) {
  //     console.error("Error al cargar los datos del JSON:", error);
  //   }
  // };

  // useEffect(() => {
  //   const fetchData = async () => {
  //     const querySnapshot = await getDocs(collection(db, "items"));
  //     const itemsData = querySnapshot.docs.map((doc) => ({
  //       id: doc.id,
  //       ...doc.data()
  //     }))as Item[];
  //     setItems(itemsData);
  //   };
  //   fetchData();
  // }, []);

  useEffect(() => {
    setQrCodes(qrInfo.slice(0, 50)); // Carga los primeros 50 códigos QR
    // loadQRData();
  }, []);

  // Función para descargar el código QR
  // const downloadQR = (id: number, name: string) => {
  //   const svg = document.getElementById(`qr-code-${id}`) as HTMLElement;
  //   const svgData = new XMLSerializer().serializeToString(svg);
  //   const svgBlob = new Blob([svgData], {
  //     type: "image/svg+xml;charset=utf-8",
  //   });
  //   const url = URL.createObjectURL(svgBlob);

  //   const downloadLink = document.createElement("a");
  //   downloadLink.href = url;
  //   downloadLink.download = `${id}-${name}.svg`;
  //   document.body.appendChild(downloadLink);
  //   downloadLink.click();
  //   document.body.removeChild(downloadLink);
  // };

  return (
    <>
      <div>
        <div className="w-[90%] px-[2rem]">
          <h2 className="text-3xl text-center">QrCodeGen App</h2>
          <Button
            onClick={reactToPrintFn}
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
                  <div id={`qr-code-${item.location_id}`}>
                    <QRCodeSVG
                      value={`${item.location_id}, ${item.source}`}
                      level="H"
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
