import React from "react";
import {
  azumarill,
  blaziken,
  buzzwole,
  ceruledge,
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
  ho_oh,
  darkrai,
  psyduck,
  tinkaton,
  armarouge,
  duraludon,
  hoopa,
  aegislash,
  trevenant,
  dragonite,
  tsareena,
  mamoswine,
  decidueye,
  greedent,
  sylveon,
  blastoise,
  blissey,
  gardevoir,
  zeraora,
  pikachu,
  charizard,
  snorlax,
  crustle,
  greninja,
  eldegoss,
  talonflame,
  lucario,
  venusaur,
  mr_mime,
  slowbro,
  absol,
  machamp,
  wigglytuff,
  ninetales_alola,
  cramorant,
  gengar,
  garchomp,
  cinderace
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

      case "ceruledge":
        img = ceruledge;
        break;
      case "ho oh":
        img = ho_oh;
        break;      
      case "darkrai":
        img = darkrai;
        break;      
      case "psyduck":
        img = psyduck;
        break;
      case "tinkaton":
        img = tinkaton;
        break;
      case "armarouge":
        img = armarouge;
        break;
      case "duraludon":
        img = duraludon;
        break;
      case "hoopa":
        img = hoopa;
        break;
      case "aegislash":
        img = aegislash;
        break;
      case "trevenant":
        img = trevenant;
        break
      case "dragonite":
        img = dragonite;
        break;
      case "tsareena":
        img = tsareena;
        break;
      case "mamoswine":
        img = mamoswine;
        break;
      case "decidueye":
        img = decidueye;
        break;
      case "greedent":
        img = greedent;
        break;
      case "sylveon":
        img = sylveon;
        break;
      case "blastoise":
        img = blastoise;
        break;
      case "blissey":
        img = blissey;
        break;
      case "gardevoir":
        img = gardevoir;
        break;
      case "zeraora":
        img = zeraora;
        break;
      case "pikachu":
        img = pikachu;
        break;
      case "charizard":
        img = charizard;
        break;
      case "snorlax":
        img = snorlax;
        break;
      case "crustle":
        img = crustle;
        break;
      case "greninja":
        img = greninja;
        break;
      case "eldegoss":
        img = eldegoss;
        break;
      case "talonflame":
        img = talonflame;
        break;
      case "lucario":
        img = lucario;
        break;
      case "venusaur":
        img = venusaur;
        break;
      case "mr mime":
        img = mr_mime;
        break;
      case "slowbro":
        img = slowbro;
        break;
      case "absol":
        img = absol;
        break;
      case "machamp":
        img = machamp;
        break;
      case "wigglytuff":
        img = wigglytuff;
        break;
      case "ninetales alola":
        img = ninetales_alola;
        break;
      case "cramorant":
        img = cramorant;
        break;
      case "gengar":
        img = gengar;
        break;
      case "garchomp":
        img = garchomp;
        break;
      case "cinderace":
        img = cinderace;
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
