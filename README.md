# Node
Testes e entendimentos em NODE

## Porque criar um repositório para node?
Para ter guardado e mostrar minha evolução em Node.

É sempre bom ter facil acesso ao conteúdo que você criou e sabe demonstrar que está entendendo do assunto, como pra que serve, como utilizar e aplicar suas funcionalidades, criar servidor local e subir eles em algum serviço de hospedagem.

## Utilizando Express
Express é uma biblioteca maravilhosa que te permite criar um servidor com node

instalando com o 'npm install express' e atribuindo em um projeto:

> const express = require('express');
> const app = express();
> 
> app.get("/", function(req, res){
>   res.sendFile(__dirname + "/index.html")  
> });
> 
> app.listen(3000, function(){
>     console.log("Server is running on Port 3000")
> });

