const assert = require("assert");

function capitalizeFirst(input) {
    if (input.length > 0) {
      return input
        .split(" ")
        .map((word) => {
          return word[0].toUpperCase() + word.slice(1);
        })
        .join(" ");
    } else {
      return "";
    }
  }


// Chaîne de plusieurs mots
assert.strictEqual(capitalizeFirst("javaScript is bad"), "JavaScript Is Bad");

//Chaîne avec un seul mot(voir une seule lettre)
assert.strictEqual(capitalizeFirst("javascript"), "Javascript");

//Chaîne vide
assert.strictEqual(capitalizeFirst(""), "");
