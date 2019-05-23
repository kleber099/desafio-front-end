import {TEXT_CHANGED, TEXT_CLEAR, LIST_POKEMONS, CAPTURE_POKEMON, FREE_POLEMON, DETAIL_POKEMON} from './pokemonActions';

const INITIAL_STATE = { description: '', list: [], detail: {} };

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TEXT_CHANGED:
      return { ...state, description: action.payload };

    case LIST_POKEMONS:
        return { ...state, list: action.payload };

    case CAPTURE_POKEMON:
      const listCapture = state.list.map(item => {
        if (item.number === action.payload.number) {
          return {...item, capture: true };
        }
        return item;
      });
      return { ...state, list: listCapture };

    case FREE_POLEMON:
      const listLiberation = state.list.map(item => {
        if (item.number === action.payload.number) {
          return {...item, capture: false };
        }
        return item;
      });
      return { ...state, list: listLiberation };

    case DETAIL_POKEMON:
      return { ...state, detail: action.payload };

    case TEXT_CLEAR:
      return { ...state, description: ''};

    default:
      return state;
  }
}