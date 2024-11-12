import ThemeButton from '@/components/common/ThemeButton'
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog'
import { UserData } from '@/lib/types/user.types'
import { useState } from 'react'
import styles from './RankingDialog.module.css'


interface Props {
    users: UserData[],
    open: boolean,
    onClose: () => void
}

const RankingDialog = ({ users, open, onClose }: Props) => {
    const [randomUser, setRandomUser] = useState<UserData | null>(null);
    const [isLoading, setIsLoading] = useState(false);

    const getRandomUser = () => {
        setIsLoading(true);
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * users.length);
            setRandomUser(users[randomIndex]);
            setIsLoading(false);
        }, 2000);
    }

    const handleClose = () => {
        setRandomUser(null);
        onClose();
    }

    return (
        <Dialog open={open} onOpenChange={handleClose}>
            <DialogContent className="w-[90%] rounded-2xl">
                <DialogHeader>
                    <DialogTitle>{isLoading || randomUser ? 'El usuario ganador es...' : 'Toca el botón para sortear al usuario.'}</DialogTitle>
                </DialogHeader>
                <div className="flex flex-col items-center gap-2">
                    {isLoading ? <div className={styles.loader}></div> : randomUser && (
                        <>
                            <p className="text-xl font-bold">{randomUser?.name} {randomUser?.lastname}</p>
                            <p className="text-sm text-gray-900">{randomUser?.email}</p>
                            <p className="text-sm text-gray-900">{randomUser?.dni}</p>
                        </>
                    )}
                </div>

                <ThemeButton onClick={getRandomUser} className="w-full" disabled={isLoading}>{isLoading ? 'Sorteando...' : 'Sortear'}</ThemeButton>
            </DialogContent>
        </Dialog>
    )
}

export default RankingDialog