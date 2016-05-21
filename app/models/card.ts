export class Card {
    id: number;
    name: string;
    rarity: string;
    image: string;

    constructor(id: number, name: string, rarity: string, image: string) {
        this.id = id;
        this.name = name;
        this.rarity = rarity;
        this.image = image;
    }
}
