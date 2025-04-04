import { EndpointManager } from "./../shared/EndpointManager.js";
import { ask, locations } from "../shared/utils.js";

export class Shell {
  constructor() {
    console.log("***** Artifacts CLI *****\n")

    this.manager = new EndpointManager();
    this.characters = null;
  }

  async run() {
    this.characters = await this.manager.getCharacterData();

    if (this.characters.length > 0) {
      let input = ask("Execute Command: ");
      let cmdArgs = input.split(" ");

      while (cmdArgs[0] !== "exit") {
        switch (cmdArgs[0]) {
          case "help":
            this.getHelpMenu();
            break;
          case "move":
            await this.manager.moveCharacter(
              cmdArgs[1],
              Number(cmdArgs[2]),
              Number(cmdArgs[3])
            );
            break;
          case "fight":
            await this.manager.fightMonster(cmdArgs[1]);
            break;
          case "gather":
            await this.manager.gatherResource(cmdArgs[1]);
            break;
          case "rest":
            await this.manager.restCharacter(cmdArgs[1]);
            break;
          case "locations":
            this.getLocationsMenu(cmdArgs[1]);
            break;
          default:
        }

        input = ask("Execute Command: ");
        cmdArgs = input.split(" ");
      }
    }
  }

  getHelpMenu() {
    console.log("");
    console.log("Help Menu:");
    console.log("\tHelp: help, display this help menu");
    console.log("\tMove: move <character> <x> <y>, move character to x y location.");
    console.log("\tFight: fight <character>, fight with character at their current location");
    console.log("\tGather: gather <character>, gather all, gather with character(s) at their current location");
    console.log("\tRest: rest <character>, rest character");
    console.log("\tLocations: locations, displays a list of locations")
    console.log("");
  }

  getLocationsMenu( type ) {
    let craft = locations.crafting;
    let fight = locations.fighting;
    let gather = locations.gathering;
    
    if (type === 'crafting') {
      console.log("Crafting Locations: ");
      for (let index = 0; index < craft.length; index++) {
        let loc = craft[index];
        console.log(
          `    Name: ${loc.name}\n` +
          `     Pos: X = ${loc.pos.x} Y = ${loc.pos.y}\n\r`
        );
      }
    } else if (type === 'gathering') {
      console.log("Gathering Locations: ");
      for (let index = 0; index < gather.length; index++) {
        let loc = gather[index];
        console.log(
          `    Name: ${loc.name}\n` +
            `     Pos: X = ${loc.pos.x} Y = ${loc.pos.y}\n\r`
        );
      }
    } else if (type === 'fighting') {
      console.log("Crafting Locations: ");
      for (let index = 0; index < fight.length; index++) {
        let loc = fight[index];
        console.log(
          `    Name: ${loc.name}\n` +
          `   Level: ${loc.level}\n` +
          `     Pos: X = ${loc.pos.x} Y = ${loc.pos.y}\n\r`
        );
      }
    } else {
      console.log("Location Options:\n\tCrafting\n\tGathering\n\tFighting\n");
    }
  }
}
