const character = {
  name: "Snortleblat",
  class: "Swamp Beast Diplomat",
  level: 8,
  health: 100,
  image: "images/snortleblat.webp",

  attacked() {
    if (this.health > 0) {
      this.health -= 20;
    }

   if (this.health <= 0) {
    this.health = 0;
    alert("Character Died");
    }

    displayCharacter();
  },

  levelUp() {
    this.level += 1;
    displayCharacter();
  }
};

const nameElement = document.querySelector("#character-name");
const classElement = document.querySelector("#character-class");
const levelElement = document.querySelector("#character-level");
const healthElement = document.querySelector("#character-health");
const imageElement = document.querySelector("#character-image");
const message = document.querySelector("#message");

function displayCharacter() {
  nameElement.textContent = character.name;
  classElement.textContent = character.class;
  levelElement.textContent = character.level;
  healthElement.textContent = character.health;
  imageElement.src = character.image;
  imageElement.alt = character.name;
}

document.querySelector("#attack-button").addEventListener("click", () => {
  character.attacked();
});

document.querySelector("#level-button").addEventListener("click", () => {
  character.levelUp();
});

displayCharacter();