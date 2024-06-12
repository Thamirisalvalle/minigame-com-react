import React, {useState} from 'react';
import GameScreen from './components/GameScreen'; // importação dos componentes

function App() {
  // Definição de estados
  const [gameState, setGameState] = useState('start');

  // Iniciar o Jogo
  const startGame = () => {
    setGameState('playing');
  };

  // Termina o Jogo
  const endGame = () => {
    setGameState('gameover');
  };

  const winGame = () => {
    setGameState('success');
  }

  return (
    // Mostrar botão iniciar jogo e novo jogo, mostrar a tela do jogo e mensagem de game over ou a mensagem de acertou tudo
    <div className="App">
      {gameState === 'start' && <button onClick={startGame}>Iniciar</button>}
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
