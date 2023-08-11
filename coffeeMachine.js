
const input = require('readline-sync')


let water = 400;
let milk = 540;
let money = 550;
let cups = 9;
let beans = 120;
let sugar = 15;

function printCoffeeMachine(water, milk, money, cups, beans, sugar) {
    console.log(`
The coffee machine has
${water} ml of water
${milk} ml of milk
${beans} g of coffee beans
${cups} disposable cups
${sugar} sugar cubes
$${money} of money
`);
}

function checkResources(water, milk, cups, beans, waterNeeded, milkNeeded, beansNeeded) {
    if (cups >= 1 && water >= waterNeeded && milk >= milkNeeded && beans >= beansNeeded)
        return true;
    else {
        if (cups < 1)
            console.log("Sorry, not enough cups!\n");
        else if (water < waterNeeded)
            console.log("Sorry, not enough water!\n");
        else if (milk < milkNeeded)
            console.log("Sorry, not enough milk!\n");
        else if (beans < beansNeeded)
            console.log("Sorry, not enough beans!\n");
        return false;
    }
}


while (1) {

    console.log("Write action (buy, fill, take, remaining, exit):");
    const action = input.question();

    if (action === "buy") {

        console.log("\nWhat do you want to buy? 1 - espresso, 2 - latte, 3 - cappuccino:");
        let coffeType = input.question();

        if (coffeType == 1) {

            if (checkResources(water, milk, cups, beans, 250, 0, 16)) {
                console.log("I have enough resources!\n");

                let sugar = input.question("Do you want to add sugar? yes no\n");

                if (sugar == "yes") {
                  let s = input.question("\nHow many sugar cubes do you want to add to your coffee?\n");
                  if (s <= sugar) {
                    console.log("\n" + `Sure! We'll add ${s} sugar cubes to your coffee! Making you the coffee!
                    `);
                    sugar -= s;
                  } else {
                    console.log("\nSorry, not enough sugar! Do you want to drink sugarless healthy coffee? yes no\n")
                    let res = input.question();
                    if (res == "no") 
                      continue;
                    else console.log("\nSure, here's the sugarless healthy coffee!");
                  }
                }

                money += 4;
                water -= 250;
                beans -= 16;
                cups--;
                console.log("Here's your coffee!");
            }
            

        } else if (coffeType == 2) {

            if (checkResources(water, milk, cups, beans, 350, 75, 20)) {
               console.log("I have enough resources!\n");

                let sugar = input.question("Do you want to add sugar? yes no\n");

                if (sugar == "yes") {
                  let s = input.question("\nHow many sugar cubes do you want to add to your coffee?\n");
                  if (s <= sugar) {
                    console.log("\n" + `Sure! We'll add ${s} sugar cubes to your coffee! Making you the coffee!
                    `);
                    sugar -= s;
                  } else {
                    console.log("\nSorry, not enough sugar! Do you want to drink sugarless healthy coffee? yes no\n")
                    let res = input.question();
                    if (res == "no") 
                      continue;
                    else console.log("\nSure, here's the sugarless healthy coffee!");
                  }
                }
              
                water -= 350;
                milk -= 75;
                beans -= 20;
                money += 7;
                cups--;
                console.log("Here's your coffee!\n");
            }
        
            
        } else if (coffeType == 3) {

            if (checkResources(water, milk, cups, beans, 200, 100, 12)) {
               console.log("I have enough resources!\n");

                let sugar = input.question("Do you want to add sugar? yes no\n");

                if (sugar == "yes") {
                  let s = input.question("\nHow many sugar cubes do you want to add to your coffee?\n");
                  if (s <= sugar) {
                    console.log("\n" + `Sure! We'll add ${s} sugar cubes to your coffee! Making you the coffee!
                    `);
                    sugar -= s;
                  } else {
                    console.log("\nSorry, not enough sugar! Do you want to drink sugarless healthy coffee? yes no\n")
                    let res = input.question();
                    if (res == "no") 
                      continue;
                    else console.log("\nSure, here's the sugarless healthy coffee!");
                  }
                }
                console.log("Here's your coffee!\n");
              
                water -= 200;
                milk -= 100;
                beans -= 12;
                money += 6;
                cups--;
            }
            
        } else if (coffeType == "back") {
            continue;
        }

    } else if (action === "fill") {

        console.log("Write how many ml of water you want to add:");
        let w = input.question();
        water += parseInt(w);

        console.log("Write how many ml of milk you want to add:");
        let m = input.question();
        milk += parseInt(m);

        console.log("Write how many grams of coffee beans you want to add:");
        let b = input.question();
        beans += parseInt(b);

        console.log("Write how many disposable cups you want to add:");
        let c = input.question();
        cups += parseInt(c);
      
        console.log("Write how many sugar cubes you want to add:");
        let s = input.question();
        sugar += parseInt(s);

    } else if (action === "take") {
        console.log("\n" + `I gave you $ ${money} money
    `);
        money = 0;

    } else if (action === "remaining") {
        printCoffeeMachine(water, milk, money, cups, beans, sugar);
    } else if (action === "exit") {
        console.log("Thanks for stopping by!\n")
        break;
    }
}