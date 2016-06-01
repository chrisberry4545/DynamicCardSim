import { Injectable } from '@angular/core';

import { POKEMON_COMBINED } from '../cards/pokemon/pokemon-combined';
import { YUGIOH_COMBINED } from '../cards/yugioh/yugioh-combined';
import { CARD_FIGHT_COMBINED } from '../cards/card-fight/card-fight-combined';

var allCardSets = [
    POKEMON_COMBINED, YUGIOH_COMBINED, CARD_FIGHT_COMBINED
];

import { Card } from '../models/card';
import { Game } from '../models/game';
import { CardsInRarity } from '../models/cards-in-rarity';
import { NumberPerSet } from '../models/number-per-set';

@Injectable()
export class CardsService {

    getGameName() {
        return 'Card Fight - Vanguard'//'Pokemon';
    }

    getSetNamesInGame(gameName: string) {
        return this.getCardsForGame(gameName).then(function(game: Game) {
            return game.cardSets.map(function(cardSet) {
                return cardSet.name;
            });
        });
    }

    getCardsForGame(gameName: string) {
        var cardsInGame = allCardSets.filter(function(allCardsInSet) {
            return allCardsInSet.gameName == gameName;
        });

        if (cardsInGame.length) {
            return Promise.resolve(cardsInGame[0]);
        }
        console.error('No card set found with gameName ' + gameName);

    }

    getCardSet(setName: string, gameSet: Game) {

        var cardsMatchingName = gameSet.cardSets.filter(function(cardSet) {
            return cardSet.name == setName;
        });

        if (cardsMatchingName.length) {
            return cardsMatchingName[0];
        }
        console.error('No card set with name ' + setName + ' found in game set ' + gameSet.gameName);
    }

  shuffleArray(array: number[]) {
      var currentIndex = array.length;
      var temporaryValue : number;
      var randomIndex : number;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
  }

  getXRandomCardsFromCardArray(numberOfCards: number, cards: Card[]) {

      //Get an array with all numbers.
      var totalCards = cards.length;
      var numberArray: number[] = [];
      for(var i = 0; i < totalCards; i++) {
          numberArray.push(i);
      }

      numberArray = this.shuffleArray(numberArray).slice(0, numberOfCards);

      var cardsArray: Card[] = [];

      numberArray.forEach(function(num) {
          cardsArray.push(cards[num]);
      });

      return cardsArray;

  }

  getCardsOfRarity(allCards: Card[], rarity: string) {

      var allCardsOfRarity = allCards.filter(function(card) {
         return card.rarity == rarity;
      });

      if (!allCardsOfRarity.length) {
          console.error('No cards found with rarity ' + rarity);
      }

      return allCardsOfRarity;

  }

  openBooster(numbersPerSet: NumberPerSet[], gameName: string) {

      var self = this;

      return this.getCardsForGame(gameName).then(function(gameSet) {

          var cardsInBooster: Card[] = [];

          numbersPerSet.forEach(function(numPerSet) {

              var cardSet = self.getCardSet(numPerSet.setName, gameSet);

              for(var i = 0; i < numPerSet.number; i++) {

                  var cardsInSingleBooster: Card[] = [];

                  cardSet.cardsInRarity.forEach(function(cardsInRarity : CardsInRarity) {
                      var allCardsOfRarityInSet = self.getCardsOfRarity(cardSet.cards, cardsInRarity.rarity);
                      var cardsOfRarityInBooster = self.getXRandomCardsFromCardArray(cardsInRarity.number, allCardsOfRarityInSet);

                      cardsInSingleBooster.push.apply(cardsInSingleBooster, cardsOfRarityInBooster);
                  });

                  cardsInBooster.push.apply(cardsInBooster, cardSet.processBooster(cardsInSingleBooster))

              }

          });

          return cardsInBooster;

      });

  }


  moveFromArray1ToArray2(array1: Card[], array2: Card[], card: Card) {
      var cardFromArray1 = array1.splice(array1.indexOf(card), 1)[0];
      array2.unshift(card);
  }

}
