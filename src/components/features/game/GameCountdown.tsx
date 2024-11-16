import { useEffect, useState, useMemo } from 'react'

const GameCountdown = ({endDate}: {endDate: string}) => {
    const endDateTime = useMemo(() => new Date(endDate).getTime(), [endDate]);
    const [time, setTime] = useState(() => endDateTime - Date.now());

    useEffect(() => {
        const interval = setInterval(() => {
            setTime(endDateTime - Date.now());
        }, 1000);
        return () => clearInterval(interval);
    }, [endDateTime]);

    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);

    return `${hours} : ${minutes.toString().padStart(2, '0')} : ${seconds.toString().padStart(2, '0')}`;
}

export default GameCountdown