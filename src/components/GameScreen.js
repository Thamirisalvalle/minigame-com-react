import React, { useState, useEffect } from 'react';
// Importações de componente
import KeyDisplay from './KeyDisplay';
import Timer from './Timer';

// Criação de estados para a sequência de teclas
function GameScreen({ endGame, winGame }) {
    // Armazena a sequência de teclas
    const [sequence, setSequence] = useState([]);
    // Acompanhar a posição atual da sequência
    const [currentIndex, setCurrentIndex] = useState(0);
    // Tempo restante
    const [timeLeft, setTimeLeft] = useState(10); // definindo tempo de limite para resolver o game

    useEffect(() => {
        // Gerar sequência de 5 letras aleatória e armazena o estado, inicia o temporizador e se o time chegar em 0 o game termina
        const generateSequence = () => {
            const keys = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
            const newSequence = [];
            for (let i = 0; i < 5; i++) {
                const randomIndex = Math.floor(Math.random() * keys.length);
                newSequence.push(keys[randomIndex]);
            }
            setSequence(newSequence);
            console.log('Sequência Gerada:', newSequence); // Log para depuração 
        };

        generateSequence();

        // Iniciar contagem regressiva
        const timer = setInterval(() => {
            setTimeLeft((prev) => {
                if (prev === 1) {
                    clearInterval(timer);
                    endGame();
                }
                return prev - 1;
            });
        }, 1000);

        // termina o game
        return () => clearInterval(timer);
    }, [endGame]);

    // Função para lidar com a tecla pressionada
    const handleKeyPress = (event) => {
        // Detecta a tecla pressionada
        const pressedKey = event.key.toUpperCase();
        console.log('Tecla Pressionada:', pressedKey); // Log para depuração
        console.log('Tecla Esperada:', sequence[currentIndex]);
        // Verifica se a tecla é correta na sequência e atualiza se for correta chama winGame, caso esteja errada o jogo termina e chama o endGame
        if (pressedKey === sequence[currentIndex]) {
            console.log('Tecla Correta!'); // Log para depuração
            if (currentIndex === sequence.length - 1) {
                winGame(timeLeft);
            } else {
                setCurrentIndex((prev) => prev + 1);
            }
        } else {
            console.log('Tecla Errada!'); // Log para depuração
            endGame();
        }
    };

    useEffect(() => {
        // Adiciona o evento para detectar as teclas pressionadas
        window.addEventListener('keydown', handleKeyPress);
        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, [currentIndex, sequence]);

    return (
        <div>
            <Timer timeLeft={timeLeft} />
            <div>
                {sequence.map((key, index) => (
                    <KeyDisplay key={index} keyChar={key} isActive={index === currentIndex} />
                ))}
            </div>
        </div>
    );
}

export default GameScreen;