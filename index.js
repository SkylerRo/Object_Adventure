

    
   

    const adventurer = {
        name: "Robin",
        health: 10,
        inventory: ["sword", "potion", "artifact"],
        companion: {
            name: "Leo",
            type: "Cat",
            roll (mod = 0) {
                const result = Math.floor(Math.random() * 20) + 1 + mod;
                console.log(`${this.name} rolled a ${result}.`);
        }
        }
        // loop inventory for robin
        for (let i = 0; i < adventurer.inventory.length; i++) {
            console.log(adventurer.inventory[i]);
        }

        const companion1 = {
            name: "Leo",
            health: 20,
            companion2: {
                companion: {
                    name: "Frank",
                    type: "Flea",
                    inventory2: ["Sunglasses", "Tiny Hat"]
                }
            }
        }