// const, let, var
const maxHealth = 100;
maxHealth = 50; // Not allowed, will throw an error
currentHealth = maxHealth

if (true) {
  var isGameOver= false;
  let isNotGameOver = true;
}
print(isGameOver); // false
print(isNotGameOver); // Throws an error because we cannot access a let outside of the { }
