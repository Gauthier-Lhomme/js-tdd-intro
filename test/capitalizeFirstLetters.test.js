const assert = require("assert");
const capitalizeFirst = require('../capitalizeFirstLetters');


describe('capiralizeFirst',() =>{

    it('Chaîne de plusieurs mots',() => {
        assert.strictEqual(capitalizeFirst("javaScript is bad"), "JavaScript Is Bad");
       })
       
       it('Chaîne avec un seul mot',() =>{
           assert.strictEqual(capitalizeFirst("javascript"), "Javascript");
       })
       
       
       it('Chaîne vide',() =>{
       assert.strictEqual(capitalizeFirst(""), "");
       })
})


