<p align="center">	
    <img src="/web/src/assets/images/1index.JPG" alt="Proffy" width="1000"/>
</p>

## :bookmark: Sobre

A aplicação <strong>Proffy</strong> é um projeto feito para estudantes encontrarem professores para fazer aulas particulares. O projeto foi desenvolvolvido durante a segunda edição da NLW da empresa Rocketseat. 

## :rocket: Tecnologias utilizadas

No projeto foram utilizadas as seguintes tecnologias:

- [Node.js](https://nodejs.org/en/)
- [Express.js](https://expressjs.com/)
- [TypeScript](https://www.typescriptlang.org/)
- [Knex](http://knexjs.org/)
- [SQLite3](https://www.sqlite.org/version3.html)
- [ReactJS](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [Expo](https://expo.io/)

### :grey_exclamation: Requisitos para rodar as aplicações

- Node.js
- Yarn ou NPM
- Expo


<h2>
  :computer: Rodar a aplicação Web
</h2>

A sequência de comandos listados abaixo acessam a pasta do projeto e instalam todas as dependências
```zsh
# Entrar na pasta web
$ cd web

# Instalar todas as dependências
$ yarn install

# Executar a aplicação
$ yarn start
```


Execute os comandos abaixo para instalar manualmente todas as dependências do projeto
```zsh
# Entrar na pasta web
$ cd web

# Instalar dependências manualmente
$ yarn add axios
$ yarn add @types/react-router-dom -D

# Executar a aplicação
$ yarn start
```


<h2>
  :computer: Rodar a aplicação Server (API)
</h2>

Os comandos listados abaixo acessam a pasta do projeto e instalam todas as dependências
```zsh
# Entrar na pasta server
$ cd server

# Instalar todas as dependências
$ yarn install

# Executar a aplicação
$ yarn start
```


Execute os comandos abaixo para instalar manualmente todas as dependências 
```zsh
# Entrar na pasta server
$ cd server

# Instalar dependências manualmente
$ yarn add knex
$ yarn add sqlite3
$ yarn add @types/cors -D
$ yarn add @types/express -D
$ yarn add ts-node-dev -D

# Executar a aplicação
$ yarn start
```

Para inciar uma nova base execute os comandos abaixo (OPCIONAL):
```zsh
# Entrar na pasta server
$ cd server

# Remove a base de dados
$ rm src/database/database.sqlite

# Inicia uma nova migração com knex
$ yarn knex:migrate  
```

<h2>
  :iphone: Rodar a aplicação Mobile
</h2>

Os comandos listados abaixo acessam a pasta do projeto e instalam todas as dependências
```zsh
# Entrar na pasta mobile
$ cd mobile

# Instalar todas as dependências
$ yarn install

# Executar a aplicação
$ yarn start
```


Execute os comandos listados abaixo para instalar manualmente todas as dependências 
```zsh
# Entrar na pasta mobile
$ cd mobile

# Instalar as fontes utilizadas
$ expo install expo-font @expo-google-fonts/archivo
$ expo install expo-font @expo-google-fonts/poppins

# Instalar as outras dependências
$ yarn add axios
$ yarn add @react-navigation/native
$ expo install react-native-gesture-handler react-native-reanimated react-native-screens react-native-safe-area-context @react-native-community/masked-view
$ yarn add @react-navigation/stack
$ yarn add @react-navigation/bottom-tabs
$ expo install @react-native-community/async-storage

# Executar a aplicação
$ yarn start
```

<strong>Obs 1:</strong> Para testar a aplicação mobile, você precisar ter o emulador instalado no computador ou o app do expo instalado em seu celular. Para utilizar o app, quando a página abrir a aplicação no navegador, escaneie com a camera do celular o QR Code apresentado, e clique no link que redirecionará para o aplicativo

<strong>Obs 2:</strong> Na aplicação mobile, o filtro da busca de professores disponiveis (botão "Estudar" na tela inicial), no campo "Dia da Semana" utilize números para cada dia da semana, 
sendo 0 = domingo, segunda = 1 e assim por diante. Caso não apareça o card com o professor completamente, clique no ícone do "filtro" que ocultará os campos dos filtro e mostrará o restante do card(s)

## :memo: Licença

Este projeto está sob a MIT License. Acesso o arquivo [LICENSE](https://github.com/alexvieirasj/proffy/blob/master/LICENSE) para maiores detalhes.
