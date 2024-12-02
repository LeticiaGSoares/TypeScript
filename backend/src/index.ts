import express from 'express';  // Não é necessário importar Application, Request, Response
import router from './router';

const app = express()

app.get("/", (req, res) => {
    res.send('Hello World');
    // Não há necessidade de "return" após enviar a resposta
})

app.use(router)
app.listen(3333)
//ctrl + space = mostra funções e tipagens depois do que foi escrito (apenas se tiver baixado os tipos da biblioteca)


/* comandos
    npm i express
    npm i -D @types/express typescript
    npx tsc --init
    --> Alterar outDir para "./dist"
    npx tsc src/index.js //converte TS para JS
    node dist/index.js

    npm i ts-node-dev
    adicionar no package.json "scripts" : {"dev": "ts-node-dev --respawn --transpile-only src/index.ts"}
*/