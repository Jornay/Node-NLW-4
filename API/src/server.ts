import express from 'express';

const app = express();


/**
 * GET => Buscar informação
 * POST => Salvar informação
 * PUT => Alterar informação
 * DELETE => Deletar informação
 * PATCH => Alteração específica
 */

 // http://localhost:3333/users  
app.get("/", (request, response) =>{
    return response.json({messege: "Este é um teste Genérico"})
})

// 1 param => Rota(Recurso API)
// 2 param => Request, Response
app.post("/", (request, response) => {
    return response.json({messege: "Dados salvos com sucesso meu chapa."})
})

app.listen(3333, () => console.log("Server is running!"));