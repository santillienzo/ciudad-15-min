import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"; 
import { IQR } from "@/lib/types/qr.types";
import ThemeButton from "@/components/common/ThemeButton";
import { Star } from "lucide-react";
import { formatCategoryName, formatSubcategoryName } from "@/lib/utils.string";

type QrDataDialogProps = {
  open: boolean; // Controla si el diálogo está abierto o cerrado
  onClose: () => void; // Función para cerrar el diálogo
  handleConfirm: () => void; // Función para confirmar los datos
  data: IQR | null; // Datos del QR que se mostrarán
};

const QrDataDialog = ({ open, onClose, data, handleConfirm }: QrDataDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onClose}>
        {data ? (
      <DialogContent className="w-[90%] rounded-2xl">
        <DialogHeader>
          <DialogTitle>{data.name}</DialogTitle>
          <DialogDescription>{data.direction}</DialogDescription>
        </DialogHeader>
        
          <div className="mt-4 space-y-2">
            <div className="flex items-center gap-4">
                <Star color="#fdba12" strokeWidth={1.75} />
                <span>{formatCategoryName(data.category)}</span>
            </div>
            <div className="flex items-center gap-4">
                <Star color="#fdba12" strokeWidth={1.75} />
                <span>{formatSubcategoryName(data.subcategory)}</span>
            </div>
          </div>

        <DialogFooter>
          <ThemeButton onClick={handleConfirm}>Confirmar</ThemeButton>
        </DialogFooter>
      </DialogContent>
        ) : (
          <p className="text-red-500">No hay datos para mostrar.</p>
        )}
    </Dialog>
  );
};

export default QrDataDialog;
