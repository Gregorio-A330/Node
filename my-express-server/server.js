//jshint esversion:6

//criar uma constante express que vai chamar o módulo express e com isso podemos utilizar os metodos dele
const express = require('express')

//o app normalmente está se referindo ao modulo express
const app = express()

//metodo que especifica quando o browser chama o servidor e faz uma requisição de chamada "GET"
// primeiro parametro pega o local (ROTA) da requisição que normalmente é a root /

//app.get define o que deve ser feito quando alguem requisita nossa homepage e callback function diz ao servidor o que deve
//fazer quando essa requisição acontece

app.get("/", function(request, response){
 response.send("hello")

})
//criando outras rotas 
app.get("/contact", function(request, response){
    response.send("Contact me at: aaa@aaa.com")
})
app.get("/about", function(request, response){
    response.send("Testando criação de rotas")
})

//app.listen  chamando o metodo listen do express e informando a porta ao executar estamos dizendo que abrimos o servidor 
//na porta 3000 com a callback function informando via console.log
app.listen(3000, function(){
    console.log("Server Started on Port 3000")
});
