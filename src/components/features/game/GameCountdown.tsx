import { cn } from '@/lib/utils';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react'

interface Props {
    endDate: string;
    showCountdown: boolean;
    onFinish?: () => void;
}

const GameCountdown = ({endDate, showCountdown, onFinish}: Props) => {
  const [time, setTime] = useState(() => new Date(endDate).getTime() - Date.now());
    

    useEffect(() => {
      const interval = setInterval(() => {
          setTime(new Date(endDate).getTime() - Date.now());
      }, 1000);
      return () => clearInterval(interval);
  }, [endDate]);

  useEffect(() => {
    if (time < 0 && onFinish) {
        onFinish();
    }
  }, [time, onFinish]);

  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);

    return showCountdown && (
        <motion.div 
          className={cn(time < 0 ? 'bg-red-500' : 'bg-background-primary', 'p-2')}
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          transition={{ duration: 0.1 }}
        >
          <span className='text-white text-center w-full block'>Hora de finalización: {new Date(endDate).toLocaleTimeString([], { minute: '2-digit', hour: '2-digit' })} hs</span>
          {
            time > 0 ? (
              <span className='text-white text-center w-full block text-2xl font-bold'>{`${hours} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`}</span>
            ) : (
              <span className='text-white text-center w-full block text-2xl font-bold'>El tiempo ha finalizado</span>
            )
          }
        </motion.div>
    )
}

export default GameCountdown