import ThemeButton from "@/components/common/ThemeButton";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader } from "@/components/ui/dialog";
import { DialogTitle } from "@radix-ui/react-dialog";
import { LogOut } from "lucide-react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  handleLogout: () => void;
}

const LogoutModal = ({isOpen, onClose, handleLogout}: Props) => {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
    <DialogContent className="w-[90%] rounded-2xl">
        <DialogHeader>
            <DialogTitle>¿Estás seguro de querer cerrar sesión?</DialogTitle>
        </DialogHeader>
        <div className="flex flex-col items-center gap-4">
            <Button className="w-full text-lg flex gap-4 rounded-xl" variant='destructive' onClick={handleLogout}>
                <LogOut /> <span>Cerrar sesión</span>
            </Button>
            <ThemeButton className="w-full text-lg flex gap-4" variant='secondary' onClick={onClose}>Cancelar</ThemeButton>
        </div>

        </DialogContent>
    </Dialog>
  )
}

export default LogoutModal