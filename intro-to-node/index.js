//jshint esversion:6


//require vai chamar a biblioteca interna file System "fs" e com a constante voce acessa os metodos dela
//const fs = require('fs');

//fs.copyFileSync("file1.txt", "file2.txt")

//-----------------------------

//inicie sempre o npm init e configure seu projeto
//depois instale os pacotes externos que virá como dependencia

var superheroes = require('superheroes')
var supervillain = require('supervillains')

var mySuperHeroName = superheroes.random()
var mySuperVillainName = supervillain.random()

console.log(mySuperHeroName)
console.log(mySuperVillainName)