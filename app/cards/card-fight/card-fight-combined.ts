import { Game } from '../../models/game';

import { GLORIUS_BRAVERY } from './card-fight-glorius-bravery';
import { TRANSCENSION_OF_BLADE } from './card-fight-transcension-of-blade';

export var CARD_FIGHT_COMBINED: Game = {
    gameName: 'Card Fight - Vanguard',
    cardSets: [TRANSCENSION_OF_BLADE, GLORIUS_BRAVERY]
}
