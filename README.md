# full stack project

## Obiettivo

Crare un applicazione per gestire i preferiti e salvarsi sul db. Esempio preferiti di chrome con la possibilità di aggiungerli direttamente e senza la struttura di cartelle laterali

## Struttura progetto

- [MongoDB](https://www.mongodb.com/) come database
  - [ ] [MongoDB](https://www.mongodb.com/) su [docker](https://www.docker.com/)
  - [ ] [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) (database sul cloud)
- Backend con RESTful api fatto con node js
  - Framework [express](https://expressjs.com/) con [mongoose](https://mongoosejs.com/) per interagire con il db
- Frontend con framework in javascript
  - [ ] [React](https://it.reactjs.org/) + [Redux](https://redux.js.org/) + [Redux Saga](https://redux-saga.js.org/) con [Material-UI](https://material-ui.com/)
  - [ ] [Vue](https://vuejs.org/) + [Vuex](https://vuex.vuejs.org/) con [Vuetify](https://vuetifyjs.com/en/)
- [ ] [Typescript](https://www.typescriptlang.org/)

## Software necessari

- [Nodejs](https://nodejs.org/en/)
- [Git](https://git-scm.com/)
- Docker se si vuole utilizzare i container
- Browser (consigliato chrome o firefox)

## Software consigliati

- [VSCode](https://code.visualstudio.com/) con le estensioni (se vuoi ti posso passare le mie configurazioni così ti facilita lo sviluppo)
- Estensione [react](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=it) e estensione [redux](https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd?hl=it)
- [Postman](https://www.postman.com/) o [Firecamp](https://firecamp.io/)
- [WSL](https://docs.microsoft.com/en-us/windows/wsl/install-win10) se si vuole sviuppare su Linux e non su Windows

## Cose da "studiare"

1. Javascript
   1. [html.it](https://www.html.it/guide/guida-javascript-di-base/)
   2. [Learn JavaScript - Full Course for Beginners](https://www.youtube.com/watch?v=PkZNo7MFNFg)
2. React o Vue
3. MongoDB
4. Express
5. Docker
6. Typescript

---

## Avvio progetto

Dalla cartella del progetto:

- Se è la prima volta `docker-compose build`
- Se non è la prima volta`docker-compose up`
  - [client](http://localhost:8080)
  - [server](http://localhost:8081)
