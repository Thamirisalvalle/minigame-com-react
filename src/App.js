import React, {useState, useEffect} from 'react';
import GameScreen from './components/GameScreen'; // importação dos componentes

function App() {
  // Definição de estados para iniciar o game e para armazenar as pontuações
  const [gameState, setGameState] = useState('start');
  const [highScores, setHighScores] = useState([]);


  // Carregamento das pontuações armazenadas no localStorage
  useEffect (() => {
    const storedScores = JSON.parse(localStorage.getItem('highScores')) || [];
    setHighScores(storedScores);
  }, []);

  // Iniciar o Jogo
  const startGame = () => {
    setGameState('playing');
  };

  // Termina o Jogo
  const endGame = () => {
    setGameState('gameover');
  };

  // Calcula o tempo gasto pelo jogador, atualiza as pontuações, armazena no localStorage e muda o estado para Success
  const winGame = (timeLeft) => { // Colocado timeLeft como parâmetro para Ranking
    const endTime = 10 - timeLeft;
    const newScore = { time: endTime, date: new Date().toLocaleString() };
    const updatedScores = [...highScores, newScore].sort((a, b) => a.time - b.time).slice(0, 5);
    setHighScores(updatedScores);
    localStorage.setItem('highScores', JSON.stringify(updatedScores));
    setGameState('success');
  };

  // Renderiza diferentes componentes e mensagens dependendo do estado do jogo e mostra o Ranking
  return (
    // Mostrar botão iniciar jogo e novo jogo, mostrar a tela do jogo e mensagem de game over ou a mensagem de acertou tudo
    <div className="App">
      {gameState === 'start' && (
        <>        
          <button onClick={startGame}>Iniciar</button>
          <div className="high-scores">
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
          <div className="game-message-end">Gamer Over</div>
          <button onClick={startGame}>Novo Jogo</button>
          <div className="high-scores">
            <h2>Melhores Pontuações:</h2>
            <ul>
              {highScores.map((score, index) => (
                <li key={index}>
                  {score.time}s - {score.date}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      {gameState === 'success' && (
        <div>
          <div className="game-message">Você acertou todas as Teclas! Parabéns</div>
          <button onClick={startGame}>Novo Jogo</button>
          <div className="high-scores">
          <h2>Melhores Pontuações:</h2>
            <ul>
              {highScores.map((score, index) => (
                <li key={index}>
                  {score.time}s - {score.date}
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
      
    </div>
  );
}

export default App;