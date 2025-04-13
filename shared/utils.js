import { createRequire } from "module";
import { API_CHARS } from "../secrets.js";
const require = createRequire(import.meta.url);
const prompt = require("prompt-sync")();

export function ask(question) {
  return prompt(question);
}

export const locations = {
  // crafting locations
  crafting: [
    {
      name: "Weaponcrafting",
      code: "weaponcrafting",
      pos: {
        x: 2,
        y: 1,
      },
    },
    {
      name: "Gearcrafting",
      code: "gearcrafting",
      pos: {
        x: 3,
        y: 1,
      },
    },
  ],
  // gathering locations
  gathering: [
    {
      name: "Copper Rocks",
      code: "copper_rocks",
      pos: {
        x: 2,
        y: 0,
      },
    },
  ],
  // combat locations
  fighting: [
    {
      name: "Chicken",
      code: "chicken",
      level: 1,
      pos: {
        x: 0,
        y: 1,
      },
    },
  ],
};