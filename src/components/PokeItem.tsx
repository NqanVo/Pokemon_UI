import React from "react";
import { Pokemon } from "../interface";
import { backgroundCard as backgroundColor } from "../backgroundcard";

interface Props {
  pokemon: Pokemon;
  handleOpenDetail: Function;
}
const PokeItem: React.FC<Props> = ({ pokemon, handleOpenDetail }) => {
  return (
    <div
      className={`${
        backgroundColor(pokemon.types[0].type.name).bg
      } h-[400px] flex flex-col gap-5 p-4 rounded-3xl border-white border-[5px]`}
    >
      <div className="relative flex items-center justify-center w-full h-2/3">
        <div
          className={`${
            backgroundColor(pokemon.types[0].type.name).outFace
          } z-0 absolute transform -translate-y-1/2 -translate-x-1/2 top-1/2 left-1/2 w-[180px] h-[180px] rounded-full`}
        ></div>
        <div className="font-fuzzy absolute top-0 right-0 bg-gray-500/50 text-white font-bold py-1 px-3 text-xs flex items-center justify-center rounded-full">
          #{pokemon.id}
        </div>
        <img
          src={pokemon.sprites.other.dream_world.front_default}
          alt={pokemon.name}
          className="w-2/3 h-2/3 object-fill z-10"
        />
      </div>
      <div className="w-full h-1/3 flex flex-col justify-between items-center">
        <h1 className="text-2xl md:text-4xl font-bold capitalize font-fuzzy">
          {pokemon.name}
        </h1>
        <span
          className={`${
            backgroundColor(pokemon.types[0].type.name).bgType
          } py-[2px] px-2 rounded-full text-white text-sm font-medium capitalize font-fuzzy`}
        >
          {pokemon.types[0].type.name}
        </span>
        <button
          onClick={() => handleOpenDetail(pokemon.id, pokemon.name)}
          className="relative text-white py-1 px-4 rounded-full bg-red-600 overflow-hidden font-bold font-fuzzy"
        >
          See Detail
        </button>
      </div>
    </div>
  );
};

export default React.memo(PokeItem);
