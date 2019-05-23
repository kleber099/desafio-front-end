import axios from 'axios';

const URL = 'https://pokeapi.co';

export const TEXT_CHANGED = 'TEXT_CHANGED';
export const TEXT_CLEAR = 'TEXT_CLEAR';
export const FREE_POLEMON = 'FREE_POLEMON';
export const LIST_POKEMONS = 'LIST_POKEMONS';
export const CAPTURE_POKEMON = 'CAPTURE_POKEMON';
export const DETAIL_POKEMON = 'DETAIL_POKEMON';

export const changeDescription = (event) => ({
  type: TEXT_CHANGED,
  payload: event.target.value
});

export const listPokemons = () => {
  return dispatch => {
    axios.get(`${URL}/api/v2/pokemon`)
    .then(resp => {
      const list = resp.data.results.map((result, index) => ({...result, number: index + 1, capture: false }));
      dispatch({
        type: LIST_POKEMONS,
        payload: list,
      });
    });
  };
};

export const capturePokemon = (pokemon) => {
  return {
    type: CAPTURE_POKEMON,
    payload: pokemon,
  };
};

export const freePokemon = (pokemon) => {
  return {
    type: FREE_POLEMON,
    payload: pokemon,
  };
};

export const detailPokemon = (pokemon) => {
  return dispatch => {
    axios.get(`${URL}/api/v2/pokemon/${pokemon.number}`)
    .then(resp => {
      dispatch({
        type: DETAIL_POKEMON,
        payload: resp.data,
      });
    });
  };
};

export const clear = () => ({ type: TEXT_CLEAR });