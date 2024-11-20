import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"; 
import ThemeButton from "@/components/common/ThemeButton";
import { formatCategoryName, formatSubcategoryName } from "@/lib/utils.string";
import { QrCode } from "lucide-react";
import { categories } from "@/lib/data/categories";
import { Location } from "@/lib/types/location.types";

type Props = {
  open: boolean; // Controla si el diálogo está abierto o cerrado
  onClose: () => void; // Función para cerrar el diálogo
  handleConfirm?: () => void; // Función para confirmar los datos
  data: Location | null; // Datos del QR que se mostrarán
};

const LocationDataDialog = ({ open, onClose, data, handleConfirm }: Props) => {
  const category = categories.find((category) => category.name === data?.category)

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
      </DialogContent>
        ) : (
          <p className="text-red-500">No hay datos para mostrar.</p>
        )}
    </Dialog>
  );
};

export default LocationDataDialog;
