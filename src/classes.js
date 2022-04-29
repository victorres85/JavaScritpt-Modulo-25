/*
* Criei um novo file (animal.js), para onde transferi a classe Animal().
* A classe foi entao importada para este aquivo por meio da const Animal, criada abaixo.
* Importante ainda salientar que de modo a tornar possivel a importacao da classe Animal(),
* me foi necessario acrescentar no arquivo animals.js a seguinte linha de comando: 
* 'module.exports = Animal;.
*/
const Animal = require('./animal.js')
class Cachorro extends Animal {
    falar() {
        console.log(this.especie + ' fala au au au')
    }

    comer() {
        console.log(this.especie + ' come ração ')
    }
}

