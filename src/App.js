import React, {useState, useEffect} from 'react';
import GameScreen from './components/GameScreen'; // importação dos componentes

function App() {
  // Definição de estados
  const [gameState, setGameState] = useState('start');
  const [highScores, setHighScores] = useState([]);


  useEffect (() => {
    const storedScores = JSON.parse(localStorage.getItem('highScores')) || [];
    setHighScores(storeScores);
  }, []);

  // Iniciar o Jogo
  const startGame = () => {
    setGameState('playing');
  };

  // Termina o Jogo
  const endGame = () => {
    setGameState('gameover');
  };

  const winGame = () => {
    const endTime = 10 - timeLeft;
    const newScore = { time: endTime, date: new Date().toLocaleString() };
    const updatedScores = [...highScores, newScore].sort((a, b) => a.time - b.time).slice(0, 5);
    setHighScores(updatedScores);
    localStorage.setItem('highScores', JSON.stringify(updatedScores));
    setGameState('success');
  };

  return (
    // Mostrar botão iniciar jogo e novo jogo, mostrar a tela do jogo e mensagem de game over ou a mensagem de acertou tudo
    <div className="App">
      {gameState === 'start' && (
        <>        
          <button onClick={startGame}>Iniciar</button>
          <div>
            <h2>Melhores Pontuações:</h2>
            <ul>
              {highScores.map((score, index) => (
                <li key={index}>
                  {score.time}s - {score.date}
                </li>
              ))}
            </ul>
          </div>
        </>
      )}
      {gameState === 'playing' && <GameScreen endGame={endGame} winGame={winGame} />}
      {gameState === 'gameover' && (
        <div>
          <div>Gamer Over</div>
          <button onClick={startGame}>Novo Jogo</button>
        </div>
      )}
      {gameState === 'success' && (
        <div>
          <div>Você acertou todas as Teclas! Parabéns</div>
          <button onClick={startGame}>Novo Jogo</button>
        </div>
      )}
      
    </div>
  );
}

export default App;
