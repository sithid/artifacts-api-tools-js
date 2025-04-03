import { createRequire } from "module";
const require = createRequire(import.meta.url);
const prompt = require("prompt-sync")();

export function ask(question) {
  return prompt(question);
}

export const locations = {
  crafting: [
    {
      name: "Workshop1",
      skill: "Weaponcrafting",
      pos: {
        x: 2,
        y: 1,
      },
    },
    {
      name: "Workshop2",
      skill: "Gearcrafting",
      pos: {
        x: 3,
        y: 1,
      },
    }
  ],
  fighting: [
    {
      name: "Chickens",
      level: 1,
      pos: {
        x: 0,
        y: 1,
      },
    }
  ]
};
