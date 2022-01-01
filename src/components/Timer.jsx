import React, { useEffect, useState } from 'react'

const Timer = ({quesNum, setStop}) => {

    const [timer, setTimer] = useState(30);

    useEffect(()=> {
        if(timer === 0) return setStop(true);
        const interval = setInterval(()=>{
            setTimer(prev => prev-1);
        },1000)
        return () => clearInterval(interval);

    },[setStop,timer]);

    useEffect(()=>{
        setTimer(30);
    },[quesNum])
    return timer;
}

export default Timer;
