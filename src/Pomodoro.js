import { useState, useEffect } from 'react';

const Pomodoro = () => {

    const [ minutes, setMinutes ] = useState(25);
    const [ seconds, setSeconds ] = useState(0);
    const [ displayMessage, setDisplayMessage ] = useState(false);

    useEffect(() => {}, [ seconds ]);
    
    return (
        <div className="pomodoro">
            <div className="message">
                { displayMessage && <div>Break time! New sessions is coming...</div> }
            </div>
            <div className="timer"> { minutes }:{ seconds } </div>
        </div>
    );
}

export default Pomodoro;