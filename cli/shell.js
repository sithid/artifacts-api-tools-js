import { EndpointManager } from "./../shared/endpoints/EndpointManager.js";
import { ask, locations } from "../shared/utils.js";

export class Shell {
  constructor() {
    console.log("***** Artifacts CLI *****\n");

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
          case "map":
            await this.manager.getMap(cmdArgs[1]);
            break;
          case "locations":
            this.getLocationsMenu(cmdArgs[1]);
            break;
          case "auto":
            await this.processAuto(cmdArgs[1]);
            break;
          default:
            console.log("Unknown command. Type 'help' for available commands.");
        }

        if (cmdArgs[0] !== "auto") {
          input = ask("Execute Command: ");
          cmdArgs = input.split(" ");
        }
      }
    }
  }

  async processAuto(type) {
    if (type === "gather") {
      console.log(
        "Starting auto gather mode. You must stop the program using CTRL + C to stop."
      );
      while (true) {
        try {
          let res = await this.manager.gatherResource("all");
          if (res && Array.isArray(res)) {
            const maxCooldown = Math.max(
              ...res.map((r) => r.cooldown?.total_seconds || 0)
            );
            if (maxCooldown > 0) {
              console.log(
                `Waiting ${maxCooldown} seconds before next gather...`
              );
              await new Promise((resolve) =>
                setTimeout(resolve, maxCooldown * 1000)
              );
            }
          }
        } catch (error) {
          console.log("Error in auto gather:", error);
          break;
        }
      }
    }
  }

  getHelpMenu() {
    console.log("");
    console.log("Help Menu:");
    console.log("\tHelp: help, display this help menu");
    console.log(
      "\tMove: move <character,all> <x> <y>, move character to x y location."
    );
    console.log(
      "\tFight: fight <character>, fight with character at their current location"
    );
    console.log(
      "\tGather: gather <character,all>, gather with character(s) at their current location"
    );
    console.log("\tRest: rest <character>, rest character");
    console.log("\tMap: map <character, all> get map data for character");
    console.log("\tLocations: locations, displays a list of locations");
    console.log("\tAuto: auto <task>");
    console.log("");
  }

  getLocationsMenu(type) {
    let craft = locations.crafting;
    let fight = locations.fighting;
    let gather = locations.gathering;

    if (type === "crafting") {
      console.log("Crafting Locations: ");
      for (let index = 0; index < craft.length; index++) {
        let loc = craft[index];
        console.log(
          `    Name: ${loc.name}\n` +
            `     Pos: X = ${loc.pos.x} Y = ${loc.pos.y}\n\r`
        );
      }
    } else if (type === "gathering") {
      console.log("Gathering Locations: ");
      for (let index = 0; index < gather.length; index++) {
        let loc = gather[index];
        console.log(
          `    Name: ${loc.name}\n` +
            `     Pos: X = ${loc.pos.x} Y = ${loc.pos.y}\n\r`
        );
      }
    } else if (type === "fighting") {
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
