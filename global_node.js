//Global no contexto NODE

let a = 1;        //Local

global.b = 222;  //Objeto global em node é equivalente a window no navegador.

this.c = "testando exports";        //Em node isso indica que esse arquivo será exportado de seu modulo, e fará parte do module.exports

console.log(`local: ${a}\n`)  //local: 1

console.log(`Global(dentro de objeto global): ${global.b}\n`) //Global(dentro de objeto global): 222

console.log(this.c)  //Exportado do módulo: testando exports, aqui visualizamos um atributo apenas
console.log(`${module.exports.c}\n`)  // Exportado do módulo: testando exports, aqui visualizamos um atributo apenas


console.log(module.exports)             //      { c: 'testando exports' }   aqui visuaçizamos o objeto inteiro

/*Também podemos passar o que será exportado definindo o objeto */

module.exports ={
    prime_gaming:true,
    account_linked: false
 }



console.log(module.exports)   // Objeto redefinido e é :   { prime_gaming: true, account_linked: false }

/* cuidado ao declarar uma váriavel sem let, var ou const, você está jogando ela no global do node. */

node4ever = "I LOVE NODE" 

console.log(!!global.node4ever)  //Assim verificamos que ele existe dentro do nosso objeto global!

 
