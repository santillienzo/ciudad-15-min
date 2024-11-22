import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"; 
import ThemeButton from "@/components/common/ThemeButton";
import { formatCategoryName, formatSubcategoryName } from "@/lib/utils.string";
import { QrCode } from "lucide-react";
import { categories } from "@/lib/data/categories";
import { Location } from "@/lib/types/location.types";

import la_social from '@/assets/img/sponsors/logo_la_social.webp'
import cachipum from '@/assets/img/sponsors/logo_cachipum.webp'
import logo_don_justo from '@/assets/img/sponsors/logo_don_justo.webp'
import logo_latinad from '@/assets/img/sponsors/latinad_square.webp'
import logo_evolution from '@/assets/img/sponsors/logo_evolution.webp'
import { motion } from "framer-motion";

const principalSponsor = {
  name: 'Bicicletas Evolution',
  logo: logo_evolution,
}

const sponsors = [
    {
      name: 'La Social - Pizzería de Barrio',
      logo: la_social,
    },
    {
      name: 'Cachipum',
      logo: cachipum,
    },
    {
      name: 'Don Justo',
      logo: logo_don_justo,
    },
    {
      name: 'LatinAd',
      logo: logo_latinad,
    }
  ];

type Props = {
  open: boolean; // Controla si el diálogo está abierto o cerrado
  onClose: () => void; // Función para cerrar el diálogo
  handleConfirm?: () => void; // Función para confirmar los datos
  data: Location | null; // Datos del QR que se mostrarán
  variant?: 'default' | 'qr';
};

const LocationDataDialog = ({ open, onClose, data, handleConfirm, variant = 'default' }: Props) => {
  const category = categories.find((category) => category.name === data?.category)
  const isQrVariant = variant === 'qr'

  if (!category) return null;

  const subcategory = category.subcategories.find((subcategory) => subcategory.name === data?.subcategory)


  return (
    <Dialog open={open} onOpenChange={onClose}>
        {data ? (
      <DialogContent className="w-[90%] rounded-2xl bg-background-primary border-none text-background-primary-foreground">
        <DialogHeader>
          <DialogTitle>{data.name}</DialogTitle>
          <DialogDescription className="text-sm">
            <span className="font-bold text-gray-100">{data.direction}</span>
          </DialogDescription>
        </DialogHeader>        
          <div className="">
            <div className="flex w-full justify-center mb-4">
              <img src={subcategory?.icons.enable} alt={data.category} width={60} height={60} className="drop-shadow-xl"/>
            </div>
            <div className="grid grid-cols-2 gap-4">
                <div className="bg-background-secondary p-4 rounded-xl shadow-xl">
                    <strong className="block mb-2 text-sm">Categoría</strong>
                    <span className="text-gray-100">{formatCategoryName(data.category || '')}</span>
                </div>
                <div className="bg-background-secondary p-4 rounded-xl shadow-xl">
                    <strong className="block mb-2 text-sm">Subcategoría</strong>
                    <span className="text-gray-100">{formatSubcategoryName(data.subcategory || '')}</span>
                </div>
            </div>
          </div>

        {handleConfirm && (
          <DialogFooter className="mt-10">
            <ThemeButton onClick={handleConfirm} className="flex gap-4 p-6 text-xl border-none outline-none">Confirmar <QrCode size={32}/></ThemeButton>
          </DialogFooter>
        )}
        {isQrVariant && (
          <>

<div className="h-[1px] w-11/12 m-auto bg-background-primary-muted my-6"></div>
            <div className="flex flex-col justify-center items-center">
              <motion.img 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                src={principalSponsor.logo} 
                alt={principalSponsor.name} 
                width={200} 
                height={150} 
                className="drop-shadow-xl" 
              />
              <div className="flex gap-10 justify-center w-full my-4 flex-wrap">
                {sponsors.slice(0, 4).map((sponsor, index) => (
                  <motion.img 
                    key={sponsor.name}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ 
                      duration: 0.3,
                      delay: index * .2 // staggered delay
                    }}
                    src={sponsor.logo} 
                    alt={sponsor.name} 
                    width={index === 3 ? 40 : 50} 
                    className="drop-shadow-xl object-contain"
                  />
                ))}
              </div>
            </div>
          </>
        )}
      </DialogContent>
        ) : (
          <p className="text-red-500">No hay datos para mostrar.</p>
        )}
    </Dialog>
  );
};

export default LocationDataDialog;
