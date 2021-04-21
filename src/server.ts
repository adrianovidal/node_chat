import express, { response } from "express";

const app = express();

/**
 * GET = Buscas
 * POST = Criação
 * PUT = Alteração
 * DELETE = Deletar
 * PATCH = Alterar uma informação específica
 */

app.get("/", (request, response) => {
  response.json({
    message: "Olá NLV 05"
  });
})

app.post("/users", (Request, response) => {
  return response.json({message: "Usuário salvo com sucesso!"});
})

app.listen(3333, () => console.log("Server is running on port 3333"));