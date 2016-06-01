import { Card } from '../models/card';
import { CardsInRarity } from '../models/cards-in-rarity';

export class CardSet {
    id: number;
    name: string;
    cards: Card[];
    cardsInRarity: CardsInRarity[];

    processBooster: (cardsInBooster: Card[]) => Card[];
}
