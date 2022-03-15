import { useState, useEffect } from 'react';

const Pomodoro = () => {

    const [ minutes, setMinutes ] = useState(25);
    const [ seconds, setSeconds ] = useState(0);
    const [ displayMessage, setDisplayMessage ] = useState(false);
    const timerMinutes = minutes < 10 ? `0${minutes}` : minutes;
    const timerSeconds = seconds < 10 ? `0${seconds}` : seconds;

    useEffect(() => {
        let interval = setInterval(() => {
            clearInterval(interval);

            if (seconds === 0) {
                if (minutes !== 0) {
                    setSeconds(59);
                    setMinutes(minutes - 1);
                }
            } else {
                setSeconds(seconds - 1);
            }
        }, 1000);
    }, [ seconds ]);

    return (
        <div className="pomodoro">
            <div className="message">
                { displayMessage && <div>Break time! New sessions is coming...</div> }
            </div>
            <div className="timer"> { timerMinutes }:{ timerSeconds } </div>
        </div>
    );
}

export default Pomodoro;