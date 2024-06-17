import React from 'react';

// keyChar caractere da tecla. isActive booleano indicando se é a tecla atual na sequência
function KeyDisplay({ keyChar, isActive, isPressed}) {
    // Para exibir a tecla com cor diferente se for a tecla atual
    return (
        <span className={`key-display ${isActive ? 'active' : ''} ${isPressed ? 'pressed' : ''}`}>
            {keyChar}
        </span>
    );
}

export default KeyDisplay;