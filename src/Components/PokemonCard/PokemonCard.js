//passe as Props corretamente do componente App.js para dentro do componente PokemonCard

// Exercício 3
// Implemente a função de evoluir o Pokemon. Nessa função de onClick, você precisa modificar o estado criado no App.js
//para que, ao clicar, o Pokemon evolua pra sua próxima forma, se isso for possível. Perceba que alguns pokemons evoluem
//e outros não. Para isso, você precisa modificar os dados de dentro do objeto salvo no useState.
//Através de um spread operator, modifique apenas os dados necessários para que o pokemon evolua:

// Cor
// Imagem
// Nome
// Tipo
// Evoluido (perceba que isso é um boolean, se ele já estiver evoluído, deve ser true; caso contrário, false.)
// Peso
// Depois disso, crie novos cards com pokemons diferentes para praticar :)

import React from "react";
import { Card, PokemonName, PokemonType, EvolveButton } from "./styles";


const PokemonCard = (props) => {
  const evoluirPokemon = () => {
    console.log("Cliquei no botão de evoluir");

    props.setPokemon({
      ...props.pokemon,
      name: "Ivysaur",
      type: "Plant",
      evolved: true,
      weight: 6,
      color: "Green",
      image:
        "https://archives.bulbagarden.net/media/upload/thumb/7/73/002Ivysaur.png/250px-002Ivysaur.png",
      id: 0
    });
  };

  return (
    <Card color={props.pokemon.color}>
      <img src={props.pokemon.image} alt={`Pokemon`} />
      <PokemonName>{props.pokemon.name}</PokemonName>
      <PokemonType>{props.pokemon.tipo}</PokemonType>
      <p>{props.pokemon.peso}kg</p>

      <EvolveButton onClick={() => evoluirPokemon(props.pokemon.name)}>
        Evoluir!
      </EvolveButton>
    </Card>
  );
};

export default PokemonCard;
