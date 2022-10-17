import React, { useCallback, useState } from "react";
import { Pokemon } from "../interface";
import PokeDetail from "./PokeDetail";
import PokeItem from "./PokeItem";

interface Props {
  pokemons: Pokemon[];
}

const PokeList: React.FC<Props> = (props) => {
  const { pokemons } = props;
  const [modal, setModal] = useState<boolean>(false);
  const [pokemonDetail, setPokemonDetail] = useState<number>(NaN);

  const handleOpenDetail = useCallback((id: number) => {
    setModal(true);
    setPokemonDetail(id);
  }, []);
  const handleCloseModal = useCallback(() => {
    setModal(false);
  }, []);
  const handleDeleteNamePoke = useCallback(() => {
    setPokemonDetail(0);
  }, []);

  return (
    <section className="grid grid-cols-2 md:grid-cols-3 xl:grid-cols-5 gap-2 md:gap-3 xl:gap-4">
      {pokemons.map((item) => (
        <PokeItem
          key={item.id}
          pokemon={item}
          handleOpenDetail={handleOpenDetail}
        ></PokeItem>
      ))}

      {modal && (
        <PokeDetail
          namePoke={pokemonDetail}
          modal={modal}
          handleCloseModal={handleCloseModal}
          handleDeleteNamePoke={handleDeleteNamePoke}
        ></PokeDetail>
      )}
    </section>
  );
};

export default React.memo(PokeList);
