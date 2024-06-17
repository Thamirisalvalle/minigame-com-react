import React from 'react';

// Exibição do tempo restante
function Timer({ timeLeft }) {
    return (
        <div className="timer">
            <h2>Tempo Restante: {timeLeft}s</h2>
        </div>
    );
}

export default Timer;