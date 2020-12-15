const assert = require("assert");
const Rectangle = require("../Rectangle");

describe("rectangle", () => {
  it("Les deux côtés de même longueur", () => {
    const rectangle1 = new Rectangle(10, 10);
    const rectangle2 = new Rectangle(10, 3);

    assert.strictEqual(rectangle1.isSquare(), true);
    assert.strictEqual(rectangle2.isSquare(), false);
  });

  it("Renvoie la surface du rectangle", () => {
    const rectangle3 = new Rectangle(10, 10);
    assert.strictEqual(rectangle3.getArea(), 100);
  });

  it("Renvoie la superficie du rectangle", () => {
    const rectangle4 = new Rectangle(13, 7);
    assert.strictEqual(rectangle4.getPerimeter(), 40);
  });
});
