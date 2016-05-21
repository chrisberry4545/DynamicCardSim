import { Game } from '../../models/game';

import { FATES_COLLIDE } from './pokemon-fates-collide';
import { GENERATIONS } from './pokemon-generations';



export var POKEMON_COMBINED: Game = {
    gameName: 'Pokemon',
    cardSets: [FATES_COLLIDE, GENERATIONS]
}
