// Jan 29th 7:30pm
import { useState, useEffect } from "react";

function Clock() {
    const [date, setDate] = useState(new Date());

    useEffect(() => { 
        setInterval(() => tick(), 1000);
        console.log('Clock component mounted');
    

    const tick = () => {
        setDate(new Date());
        console.log('tick');
    }

    const intervalID = setInterval(tick, 1000)

    return () =>clearInterval(intervalID)
   }, [])

    return (
        <div className="Clock">
            <h3>Digital Clock</h3>
            {date.toLocaleTimeString()}
        </div>
    );
}

function ClockDisplay() {

    const [showClock, setShowClock] = useState(false);
    
    const toggleClock = () => {
        setShowClock(!showClock);
    }
    
    return (
        <div className="ClockDisplay componentBox">
            {showClock && <Clock />}
            <button onClick={toggleClock}>Toggle Clock</button>
        </div>
    )
}
    
export default ClockDisplay;