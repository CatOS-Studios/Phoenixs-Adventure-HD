// const, let, var
const maxHealth = 100;
var currentHealth = 50;
currentHealth = maxHealth

if (true) {
  var isGameOver= false;
  let isNotGameOver = true;
}
print(isGameOver); // false
print(isNotGameOver); // Throws an error because we cannot access a let outside of the { }
