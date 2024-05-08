import React from "react";
import { blaziken, falinks, gyarados, inteleon, leafeon, meowscarada, metagross, mewtwo, mimikyu, miraidon } from "../assets";

export const usePokemon = () => {
  const getPokemonImg = (pokemon) => {
    let img = null;

    switch (pokemon) {
      case "blaziken":
        img = blaziken;
        break;
      case "mimikyu":
        img = mimikyu;
        break;
      case "meowscarada":
        img = meowscarada;
        break;
      case "metagross":
        img = metagross;
        break;
      case "gyarados":
        img = gyarados;
        break;
      case "miraidon":
        img = miraidon;
        break;
      case "mewtwo":
        img = mewtwo;
        break;
      case "inteleon":
        img = inteleon;
        break;
      case "falinks":
        img = falinks;
        break;
      case "leafeon":
        img = leafeon;
        break;

      default:
        break;
    }

    return img;
  };

  return {
    getPokemonImg,
  };
};
