const adventurer = {
  name: "Robin",
  health: 10,
  inventory: ["sword", "potion", "artifact"],
  companion: {
    name: "Leo",
    type: "Cat",
    health: 20,
    companion: {
      name: "Frank",
      type: "Flea",
      inventory: ["Sunglasses", "Tiny Hat"],
    },
  },
  roll(mod = 0) {
    const result = Math.floor(Math.random() * 20) + 1 + mod;
    console.log(`${this.name} rolled a ${result}.`);
  },
};

class Character {
    constructor (name) {
      this.name = name;
      this.health = 100;
      this.inventory = [];
    }
  }
  



class adventurer extends character {
    constructor(name,role,companion) {
        super(name);
        this.companion = companion;
        this.role = role;
    }
}

class Adventurer extends Character {
    constructor (name, role) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }