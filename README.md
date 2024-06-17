# Mini Game em React

Este é um pequeno jogo desenvolvido em React onde o jogador deve pressionar uma sequência específica de teclas dentro de um tempo limite para vencer o jogo. O projeto utiliza componentes funcionais do React, hooks como `useState` e `useEffect`, além de estilos CSS para aprimorar a interface do usuário.

## Funcionalidades

- **Iniciar Jogo**: Ao clicar no botão "Iniciar", o jogo começa e uma sequência aleatória de teclas é gerada.
- **Pressionar Teclas**: O jogador deve pressionar as teclas na ordem correta conforme exibido na tela.
- **Tempo Limite**: Um temporizador inicia a contagem regressiva a partir de 10 segundos. Se o tempo acabar antes do jogador completar a sequência, o jogo termina.
- **Fim de Jogo**: Quando o jogador completa a sequência corretamente, uma mensagem de sucesso é exibida com o tempo final e o jogador pode iniciar um novo jogo.
- **Ranking de Pontuações**: As melhores pontuações são armazenadas localmente e exibidas na tela inicial.

## Componentes

### GameScreen Component

O componente `GameScreen` é responsável por exibir o jogo em si. Ele inclui a contagem regressiva do temporizador, a exibição da sequência de teclas e lida com a lógica de jogo, como detectar teclas pressionadas corretamente e encerrar o jogo quando necessário.

### App Component

O componente `App` controla o estado geral do jogo. Ele inclui o botão de "Iniciar", gerencia o estado do jogo (início, jogo em andamento, jogo encerrado, sucesso) e exibe as diferentes telas com base no estado atual do jogo.

## Estrutura do Projeto

O projeto possui a seguinte estrutura de arquivos:

/minigame-com-react
    src/
        components/
            GameScreen.js
            KeyDisplay.js
            Timer.js

        styles/
            GameScreen.css

        App.js
        index.js
        index.css
    README.md



- **`/components`**: Pasta que contém todos os componentes React utilizados no projeto.
- **`/styles`**: Pasta que contém arquivos de estilos CSS para os componentes.
- **`index.js`**: Arquivo de ponto de entrada da aplicação React.
- **`index.css`**: Arquivo onde é aplicada a estilização global do jogo.

## Instalação e Execução

Para executar este projeto localmente, siga os passos abaixo:

1. Clone este repositório para o seu ambiente local:
   git clone https://github.com/Thamirisalvalle/minigame-com-react.git

2. Navegue até o diretório do projeto:
    cd minigame-com-react

3. Instale as dependências necessárias:
    npm install

4. Inicie a aplicação localmente:
    npm start

5. Abra seu navegador e acesse http://localhost:3000 para ver o jogo em ação.

## Tecnologias Utilizadas
- React
- JavaScript (ES6+)
- HTML5
- CSS3

## Contribuições
Contribuições são bem-vindas! Sinta-se à vontade para abrir uma issue para relatar bugs, sugestões ou melhorias. Se desejar contribuir diretamente:

1. Fork o repositório
2. Crie uma branch com sua feature (git checkout -b feature/MinhaFeature)
3. Faça commit das suas alterações (git commit -am 'Adicionar nova funcionalidade')
4. Faça push para a branch (git push origin feature/MinhaFeature)
5. Abra um Pull Request

## Licença

O projeto está licenciado sob a [Licença MIT](https://opensource.org/licenses/MIT).

**Para mais detalhes, visite o [repositório do projeto](https://github.com/Thamirisalvalle/minigame-com-react) no GitHub.**

