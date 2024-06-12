import React from 'react';

// keyChar caractere da tecla. isActive booleano indicando se é a tecla atual na sequência
function KeyDisplay({ keyChar, isActive}) {
    // Para exibir a tecla com cor diferente se for a tecla atual
    return (
        <span style={{ margin: '0 10px', color: isActive ? 'green' : 'black'}}>
            {keyChar}
        </span>
    );
}

export default KeyDisplay;