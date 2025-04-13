import { API_TOKEN, API_CHARS } from "../../secrets.js";

export class EndpointManager {
  constructor() {
    this.characters = [];
    this.server = "https://api.artifactsmmo.com";
    this.token = API_TOKEN;
    this.requestHeader = new Headers();
    this.requestHeader.append("Accept", "application/json");
    this.requestHeader.append("Content-Type", "application/json");
    this.requestHeader.append("Authorization", "Bearer " + this.token);
    this.getCharacterData().then((data) => {
      this.characters = data;
    });
  }

  async getCharacterData() {
    const url = `${this.server}/my/characters`;

    const options = {
      method: "GET",
      headers: this.requestHeader,
    };

    const response = await fetch(url, options);

    if (response.status !== 200) {
      console.log(`Something went wrong:  + ${response.status}`);

      return null;
    } else {
      let { data } = await response.json();
      return data;
    }
  }

  async getMaps() {
    const url = `${this.server}/maps`;

    const options = {
      method: "GET",
      headers: this.requestHeader,
    };

    const response = await fetch(url, options);

    if (response.status !== 200) {
      console.log(`Something went wrong:  + ${response.status}`);

      return null;
    } else {
      let { data } = await response.json();
      return data;
    }
  }

  async getMap(character) {
    const options = {
      method: "GET",
      headers: this.requestHeader,
    };

    if (typeof character === "object") {
      const x = character?.x ?? 0;
      const y = character?.y ?? 0;

      const url = `${this.server}/maps/${x}/${y}`;

      const response = await fetch(url, options);

      if (response.status !== 200) {
        console.log(`Something went wrong: ${response.status}`);
      } else {
        let { data } = await response.json();
        console.log(data);
        return data;
      }
    } else if (character === "all") {
      let mapDatas = [];

      for (let char of this.characters) {
        let data = await this.getMap(char);

        mapDatas.push(data);
      }

      return mapDatas;
    } else {
      for (let char of this.characters) {
        if (char.name === character) {
          let data = await this.getMap(char);
          console.log("test");
          return data;
        }
      }
      
      console.log("Invalid input.  Try again.");
    }
  }

  async moveCharacter(character, x, y) {
    const options = {
      method: "POST",
      headers: this.requestHeader,
      body: JSON.stringify({
        x: x,
        y: y,
      }),
    };

    if (character !== "all") {
      const url = `${this.server}/my/${character}/action/move`;

      const response = await fetch(url, options);

      if (response.status !== 200) {
        switch (response.status) {
          case 499:
            console.log("Character in cooldown.");
            break;
          case 498:
            console.log("Character not found.");
            break;
          case 490:
            console.log("Character already at destination.");
            break;
          case 486:
            console.log("An action is already in progress by your character.");
            break;
          default:
            console.log("Error Unknown: " + response.status);
            break;
        }

        return null;
      } else {
        let { data } = await response.json();
        console.log(`Successfully moved ${character} to (${x},${y}).`);

        return data;
      }
    } else {
      const moveDatas = [];

      for (let char of API_CHARS) {
        const url = `${this.server}/my/${char.name}/action/move`;

        const response = await fetch(url, options);

        if (response.status !== 200) {
          switch (response.status) {
            case 499:
              console.log("Character in cooldown.");
              break;
            case 498:
              console.log("Character not found.");
              break;
            case 490:
              console.log("Character already at destination.");
              break;
            case 486:
              console.log(
                "An action is already in progress by your character."
              );
              break;
            default:
              console.log("Error Unknown: " + response.status);
              break;
          }
        } else {
          let { data } = await response.json();
          console.log(`Successfully moved ${char.name} to (${x},${y}).`);

          moveDatas.push(data);
        }
      }

      return moveDatas;
    }
  }

  async restCharacter(character) {
    var options = {
      method: "POST",
      headers: this.requestHeader,
    };

    if (character !== "all") {
      let url = `${this.server}/my/${character}/action/rest`;
      const response = await fetch(url, options);

      if (response.status !== 200) {
        switch (response.status) {
          case 499:
            console.log("Character in cooldown.");
            break;
          case 498:
            console.log("Character not found.");
            break;
          case 486:
            console.log("An action is already in progress by your character.");
            break;
          default:
            console.log("Error Unknown: " + response.status);
            break;
        }

        return null;
      } else {
        let { data } = await response.json();
        console.log("The character has rested successfully.");

        return data;
      }
    } else {
      const restDatas = [];

      for (let char of API_CHARS) {
        let url = `${this.server}/my/${char.name}/action/rest`;
        const response = await fetch(url, options);

        if (response.status !== 200) {
          switch (response.status) {
            case 499:
              console.log("Character in cooldown.");
              break;
            case 498:
              console.log("Character not found.");
              break;
            case 486:
              console.log(
                "An action is already in progress by your character."
              );
              break;
            default:
              console.log("Error Unknown: " + response.status);
              break;
          }
        } else {
          let { data } = await response.json();
          console.log("The character has rested successfully.");

          restDatas.push(data);
        }
      }

      return restDatas;
    }
  }

  async fightMonster(character) {
    var options = {
      method: "POST",
      headers: this.requestHeader,
    };

    if (character !== "all") {
      let url = `${this.server}/my/${character}/action/fight`;
      const response = await fetch(url, options);

      if (response.status !== 200) {
        switch (response.status) {
          case 598:
            console.log("Monster not found on this map.");
            break;
          case 499:
            console.log("Character in cooldown.");
            break;
          case 498:
            console.log("Character not found.");
            break;
          case 497:
            console.log("Character inventory is full.");
            break;
          case 486:
            console.log("An action is already in progress by your character.");
            break;
          default:
            console.log("Error Unknown: " + response.status);
            break;
        }

        return null;
      } else {
        let { data } = await response.json();
        console.log("The fight ended successfully.");

        return data;
      }
    } else {
      const fightDatas = [];

      for (let char of API_CHARS) {
        let url = `${this.server}/my/${char.name}/action/fight`;

        const response = await fetch(url, options);

        if (response.status !== 200) {
          switch (response.status) {
            case 598:
              console.log("Monster not found on this map.");
              break;
            case 499:
              console.log("Character in cooldown.");
              break;
            case 498:
              console.log("Character not found.");
              break;
            case 497:
              console.log("Character inventory is full.");
              break;
            case 486:
              console.log(
                "An action is already in progress by your character."
              );
              break;
            default:
              console.log("Error Unknown: " + response.status);
              break;
          }
        } else {
          let { data } = await response.json();
          console.log("The fight ended successfully.");

          fightDatas.push(data);
        }
      }

      return fightDatas;
    }
  }

  async gatherResource(character) {
    let url = `${this.server}/my/${character}/action/gathering`;

    const options = {
      method: "POST",
      headers: this.requestHeader,
    };

    if (character !== "all") {
      const response = await fetch(url, options);

      if (response.status !== 200) {
        switch (response.status) {
          case 598:
            console.log("Resource not found on this map.");
            break;
          case 499:
            console.log("Character in cooldown.");
            break;
          case 498:
            console.log("Character not found.");
            break;
          case 497:
            console.log("Character inventory is full.");
            break;
          case 493:
            console.log("Not skill level required.");
            break;
          case 486:
            console.log("An action is already in progress by your character.");
            break;
          default:
            console.log("Error Unknown: " + response.status);
            break;
        }

        return null;
      } else {
        let { data } = await response.json();
        console.log("The resource has been successfully gathered. ");

        return data;
      }
    } else {
      const gatherDatas = [];

      for (let char of API_CHARS) {
        let url = `${this.server}/my/${char.name}/action/gathering`;

        const response = await fetch(url, options);

        if (response.status !== 200) {
          switch (response.status) {
            case 598:
              console.log("Resource not found on this map.");
              break;
            case 499:
              console.log("Character in cooldown.");
              break;
            case 498:
              console.log("Character not found.");
              break;
            case 497:
              console.log("Character inventory is full.");
              break;
            case 493:
              console.log("Not skill level required.");
              break;
            case 486:
              console.log(
                "An action is already in progress by your character."
              );
              break;
            default:
              console.log("Error Unknown: " + response.status);
              break;
          }
        } else {
          let { data } = await response.json();
          console.log("The resource has been successfully gathered. ");
          gatherDatas.push(data);
        }
      }

      return gatherDatas;
    }
  }
}
