# Client

---
Documentazione generata da VUE

## Project setup

```bash
yarn install
```

### Compiles and hot-reloads for development

```bash
yarn serve
```

### Compiles and minifies for production

```bash
yarn build
```

### Lints and fixes files

```bash
yarn lint
```

### Customize configuration

See [Configuration Reference](https://cli.vuejs.org/config/).

---

## Componenti

L'app è composta da 5 componenti:

- `App.vue` -> componente principale
- `AddBookmark.vue` -> expansion pannel per aggiungere un preferito
- `AppBar.vue` -> header dell'app con la ricerca
- `Bookmark.vue` -> componente per ogni preferito. Da questo componente è possibile aprire il link, eliminare il preferito o modificarlo
- `DialogEdit.vue` -> modale per modificare un preferito

Tutti i componenti si basano sui componenti di vuetify

## Formato link

Per poter inserire un preferito o modificarlo viene controllato il formato del link che deve essere del tipo `https://www.google.ch`

## Vuex

All'avvio dell'app viene eseguita la chiamata al server per ottenere tutti i preferitii quali vengono inseriti nello store.
Ogni volta che si vuole eseguire una modifica, permanente, ad un preferito (aggiungere, modificare o eliminare) viene lanciata un azione che viene intercettata dello store che si occupa di gestirle.
Ogni volta che viene eseguita una chiamata viene modificato il valore `loading` per controllare se l'app stà caricando dei dati.

### Documentazione dei componenti

Se si vuole generare una Documentazione dei componenti più dettagliata è possible usare [vuese](https://github.com/vuese/vuese)
