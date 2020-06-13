# Server

Il server è stato sviluppato con Expressjs (il quale si basa su Node).

Dopo essere entrati nella cartella del server `cd server` e aver installato le dipendenze (`yarn`) è possible avviare il server in modalità sviluppo sfruttando nodemon usando il comando `yarn dev`. Nodemon si occupa di riavviare il server ogni volta che viene salvato un file. Se si vuole semplicemente avviare il server con node è possible usare il comando `yarn start`.

Il server si avvia sulla porta `:8081`. Se si stà utilizzando docker-compose il link al server sarà [http://server:8081](http://server:8081), mentre se si avvia il progetto direttamente il link sarà [http://localhost:8081](http://localhost:8081).

Il file iniziale è il file `index.js`. Dopo le configurazioni di base di express viene specificata l'unica route del server. È presente anche una funziona che gestisce le richieste in GET sul `/` che ritorna una stringa. Per gestire le interazioni con MongoDB è presente uno schema mongoose nella cartella `models`. Il modello per un preferito è composto così:

```js
{
  name: String,
  link: String,
}
```

Ogni preferito viene inserito nella collection `bookmarks` del db `bookmarks`.

MongoDB viene avviato con docker sulla porta `:27017`.  Se si stà utilizzando direttamente docker la stringa di connessione al db sarà [mongodb://localhost:27017/bookmarks](mongodb://localhost:27017/bookmarks), mentre se si avvia il progetto usando docker-compose la stringa sarà [mongodb://user:password@db:27017/bookmarks?authSource=admin](mongodb://user:password@db:27017/bookmarks?authSource=admin).

## Possibili chiamte a /bookmarks

| Metodo | Path            | Parametri | Body                      | Ritorno                                     |
| ------ | --------------- | --------- | ------------------------- | ------------------------------------------- |
| GET    | /getAllBookmark |           |                           | Tutti i preferiti                           |
| GET    | /               | :id       |                           | Il preferito con l'id                       |
| GET    | /findBookmark   | ?search=  |                           | I preferito con il nome o il link richiesto |
| POST   | /addBookmark    |           | {"link": "", "name": "" } | Il preferito aggiunto                       |
| PUT    | /               | :id       | {"link": "", "name": "" } | Il preferito modificato                     |
| DELETE | /               | :id       |                           | Stringa con l'id del preferito eliminato    |
