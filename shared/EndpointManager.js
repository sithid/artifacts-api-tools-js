import { API_TOKEN } from "../secrets.js";

export class EndpointManager {
  constructor() {
    this.server = "https://api.artifactsmmo.com";
    this.token = API_TOKEN;
    this.requestHeader = new Headers();
    this.requestHeader.append("Accept", "application/json");
    this.requestHeader.append("Content-Type", "application/json");
    this.requestHeader.append("Authorization", "Bearer " + this.token);
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

  async moveCharacter(character, x, y) {
    const url = `${this.server}/my/${character}/action/move`;

    const options = {
      method: "POST",
      headers: this.requestHeader,
      body: JSON.stringify({
        x: x,
        y: y,
      }),
    };

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
  }

  async restCharacter(character) {
    let url = `${this.server}/my/${character}/action/rest`;

    var options = {
      method: "POST",
      headers: this.requestHeader,
    };

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
  }

  async fightMonster(character) {
    let url = `${this.server}/my/${character}/action/fight`;

    var options = {
      method: "POST",
      headers: this.requestHeader,
    };

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
  }

  async gatherResource(character) {
    let url = `${this.server}/my/${character}/action/gathering`;

    const options = {
      method: "POST",
      headers: this.requestHeader,
    };

    if (character !== 'all') {
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
      }
      else {
        let { data } = await response.json();
        console.log("The resource has been successfully gathered. ");

        return data;
      }
    }
    else
    {
      let chars = await this.getCharacterData();
      const charDatas = [];
      
      for (let char of chars)
      {
        let url = `${this.server}/my/${char.name}/action/gathering`;

        const response = await fetch(url, options);

        if (response.status !== 200)
        {
          switch (response.status)
          {
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
        }
        else
        {
          let { data } = await response.json();
          console.log("The resource has been successfully gathered. ");
          charDatas.push(data);
        }
      }
      
      return charDatas;
    }
  }
}
