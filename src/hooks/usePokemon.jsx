import React from "react";
import {
  azumarill,
  blaziken,
  buzzwole,
  chandelur,
  clefable,
  comfey,
  delphox,
  dodrio,
  dragapult,
  espeon,
  falinks,
  glaceon,
  goodra,
  gyarados,
  inteleon,
  lapras,
  leafeon,
  meowscarada,
  metagross,
  mew,
  mewtwo,
  mimikyu,
  miraidon,
  sableye,
  scizor,
  tyranitar,
  umbreon,
  urshifu,
  zacian,
  zoroark,
} from "../assets";
import { atacante } from "../assets/atacante";

export const usePokemon = () => {
  const getPokemonImg = (pokemon) => {
    let img = null;

    switch (pokemon.toLowerCase()) {
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
      case "azumarill":
        img = azumarill;
        break;
      case "buzzwole":
        img = buzzwole;
        break;
      case "chandelure":
        img = chandelur;
        break;
      case "clefable":
        img = clefable;
        break;
      case "comfey":
        img = comfey;
        break;
      case "delphox":
        img = delphox;
        break;
      case "dodrio":
        img = dodrio;
        break;
      case "dragapult":
        img = dragapult;
        break;
      case "espeon":
        img = espeon;
        break;
      case "glaceon":
        img = glaceon;
        break;
      case "goodra":
        img = goodra;
        break;
      case "lapras":
        img = lapras;
        break;
      case "mew":
        img = mew;
        break;
      case "sableye":
        img = sableye;
        break;
      case "scizor":
        img = scizor;
        break;
      case "tyranitar":
        img = tyranitar;
        break;
      case "umbreon":
        img = umbreon;
        break;
      case "urshifu":
        img = urshifu;
        break;
      case "zacian":
        img = zacian;
        break;
      case "zoroark":
        img = zoroark;
        break;
      default:
        break;
    }

    return img;
  };

  const getRol = (rol) => {

    let img = null;

    switch ('atacante') {
      case value:
        img = atacante;
        break;
    
      default:
        break;
    }
  }

  return {
    getPokemonImg,
  };
};
