const heart = require("./assets/image/Stats/heart.png");
const attack = require("./assets/image/Stats/attack.png");
const defence = require("./assets/image/Stats/defence.png");
const foot = require("./assets/image/Stats/foot.png");
const special_attack = require("./assets/image/Stats/special_attack.png");
const special_defence = require("./assets/image/Stats/special_defence.png");
const any = require("./assets/image/Stats/help.png");

export const ImageStats = (stat: string) => {
  switch (stat) {
    case "hp":
      return String(heart);
    case "attack":
      return String(attack);
    case "defense":
      return String(defence);
    case "speed":
      return String(foot);
    case "special-attack":
      return String(special_attack);
    case "special-defense":
      return String(special_defence);
    default:
      return String(any);
  }
};
