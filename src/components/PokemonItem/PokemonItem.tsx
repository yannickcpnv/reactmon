import {Card} from 'primereact/card';
import React, {useCallback} from 'react';
import './PokemonItem.scss';
import {DivMouseEvent} from '../../types/events';
import {IPokemonBulkResult} from '../../types/poke-api';

interface PokemonItemProps {
  pokemon: IPokemonBulkResult;
}

export default function PokemonItem({pokemon}: PokemonItemProps) {
  const shadowClassName = 'shadow-5';

  const onMouseOver = useCallback((e: DivMouseEvent) => {
    e.currentTarget.classList.add(shadowClassName);
    e.currentTarget.style.cursor = 'pointer';
  }, [pokemon]);

  const onMouseOut = useCallback((e: DivMouseEvent) => {
    e.currentTarget.classList.remove(shadowClassName);
    e.currentTarget.style.cursor = 'default';
  }, [pokemon]);

  const pokemonId = pokemon.url.split('/')[6];
  const imageSrc = `${import.meta.env.VITE_OFFICIAL_PNG_URL}/${pokemonId}.png`;

  return (
      <a href="#" className="p-reset">
        <Card
            title={pokemon.name.capitalize()}
            subTitle={pokemonId}
            className="pokemon-item m-1 p-2 col max-w-fit"
            onMouseOver={onMouseOver}
            onMouseOut={onMouseOut}
        >
          <img
              src={imageSrc}
              alt={pokemon.name}
              width="100"
          />
        </Card>
      </a>
  );
}
