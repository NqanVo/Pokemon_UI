import axios from "axios";
import React, { useEffect, useState } from "react";
import { Pokemon } from "../interface";
import Modal from "./Modal";
import { backgroundCard as backgroundColor } from "../backgroundcard";
import { ImageStats } from "../imagestats";
const ball = require("../assets/image/Stats/pokeball.png");

interface Props {
  modal: boolean;
  namePoke: number;
  handleCloseModal: Function;
  handleDeleteNamePoke: Function;
}
interface Descriptions {
  description: string;
  language: {
    name: string;
  };
}
interface Skills {
  effect_entries: [
    {
      effect: string;
      short_effect: string;
      language: {
        name: string;
      };
    }
  ];
}
const PokeDetail = (props: Props) => {
  const { modal, namePoke, handleCloseModal, handleDeleteNamePoke } = props;
  const [dataPokemonDetail, setDataPokemonDetail] = useState<Pokemon>();
  const [desc, setDesc] = useState<Descriptions[]>([]);
  const [skills, setSkills] = useState<Skills>();

  //get data
  useEffect(() => {
    const getPokeDetail = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${namePoke}`
      );
      setDataPokemonDetail(res.data);
    };
    if (namePoke) getPokeDetail();
  }, [namePoke]);

  //get descriptions
  useEffect(() => {
    const getDescriptions = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/characteristic/${namePoke}`
      );
      setDesc(res.data.descriptions);
    };
    if (namePoke) getDescriptions();
  }, [namePoke]);

  //get skills
  useEffect(() => {
    const getSkills = async () => {
      const res = await axios.get(
        `https://pokeapi.co/api/v2/ability/${namePoke}`
      );
      setSkills(res.data);
    };
    if (namePoke) getSkills();
  }, [namePoke]);

  const handleDeleteDataDetail = () => {
    setDataPokemonDetail(undefined);
    setDesc([]);
    setSkills(undefined);
  };

  return (
    <Modal modal={modal}>
      {dataPokemonDetail && (
        <div className="OpenAnimate h-[500px] text-sm md:text-base xl:h-[500px] flex flex-col md:grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4">
          {/* container */}
          <div className="w-full h-full flex flex-col justify-center items-center gap-4 text-white overflow-hidden">
            {/* name */}
            <h1 className="text-2xl md:text-4xl xl:text-5xl tracking-wider uppercase font-fuzzy">
              {dataPokemonDetail.name}
            </h1>
            {/* types */}
            <div className="flex gap-2">
              {dataPokemonDetail.types.map((item, index) => (
                <span
                  key={index}
                  className={`${
                    backgroundColor(item.type.name).bgType
                  } py-[2px] px-2 rounded-full text-white text-sm font-medium capitalize font-fuzzy`}
                >
                  {item.type.name}
                </span>
              ))}
            </div>
            {/* stats */}
            <div className="flex flex-wrap justify-center gap-2">
              {dataPokemonDetail.stats.map((item, index) => (
                <p
                  key={index}
                  className="flex gap-1 px-2 py-1 items-center rounded-full bg-white/80 text-black font-fuzzy"
                >
                  <img
                    src={ImageStats(item.stat.name)}
                    alt={item.stat.name}
                    className="w-5 h-5 object-cover"
                  />
                  {item.base_stat}
                </p>
              ))}
            </div>
            {/* content */}
            <div className="flex gap-2">
              <b>Descriptions:</b>
              {desc &&
                desc.map(
                  (item, index) =>
                    item.language.name === "en" && (
                      <p key={index}>{item.description}</p>
                    )
                )}
            </div>
            <div className="w-11/12 xl:w-5/6 flex flex-col gap-1 overflow-y-scroll">
              <b>Short skill:</b>
              {skills &&
                skills.effect_entries.map(
                  (item, index) =>
                    item.language.name === "en" && (
                      <p key={index} className="text-sm font-extralight">
                        {item.short_effect}
                      </p>
                    )
                )}
              <b>Skill:</b>
              {skills &&
                skills.effect_entries.map(
                  (item, index) =>
                    item.language.name === "en" && (
                      <p key={index} className="text-sm font-extralight">
                        {item.effect}
                      </p>
                    )
                )}
            </div>
          </div>
          {/* image */}
          <div className="relative mx-auto w-1/2 h-1/2 md:w-full md:h-full overflow-hidden z-10">
            <img
              src={dataPokemonDetail.sprites.other.dream_world.front_default}
              alt=""
              className="w-full h-full object-fill"
            />
            <img
              src={String(ball)}
              alt=""
              className="absolute inset-0 mx-auto my-auto animate-spin -z-10 opacity-30"
            />
          </div>
          {/* close modal */}
          <button
            onClick={() => {
              handleDeleteDataDetail();
              handleCloseModal();
              handleDeleteNamePoke();
            }}
            className="absolute top-5 right-5 text-white p-1 text-xl z-50"
          >
            X
          </button>
        </div>
      )}
    </Modal>
  );
};

export default React.memo(PokeDetail);
