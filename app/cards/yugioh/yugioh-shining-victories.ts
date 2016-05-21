import {Card} from '../../models/card';
import { CardSet } from '../../models/card-set';
import { CardsInRarity } from '../../models/cards-in-rarity';

var CARDS: Card[] = [
    new Card(1,'Magical Cavalry of Cxulub','Rare',''),
    new Card(2,'Angel Trumpeter','Common',''),
    new Card(3,'Performapal Sellshell Crab','Common',''),
    new Card(4,'Performapal Odd-Eyes Light Phoenix','Rare',''),
    new Card(5,'Performapal Odd-Eyes Unicorn','Rare',''),
    new Card(6,'Performapal Fireflux','Common',''),
    new Card(7,'Speedroid Den-Den Daiko Duke','Rare',''),
    new Card(8,'Speedroid Pachingo-Kart','Rare',''),
    new Card(9,'Lunalight Blue Cat','Rare',''),
    new Card(10,'Lunalight Purple Butterfly','Common',''),
    new Card(11,'Lunalight White Rabbit','Common',''),
    new Card(12,'Lunalight Black Sheep','Common',''),
    new Card(13,'Lunalight Wolf','Common',''),
    new Card(14,'Lunalight Tiger','Common',''),
    new Card(15,'Raidraptor - Avenge Vulture','Common',''),
    new Card(16,'Raidraptor - Pain Lanius','Common',''),
    new Card(17,'Raidraptor - Booster Strix','Common',''),
    new Card(18,'Blackwing - Decay the Ill Wind','Common',''),
    new Card(19,'Dragon Spirit of White','Ultra Rare',''),
    new Card(20,'Protector with Eyes of Blue','Common',''),
    new Card(21,'Sage with Eyes of Blue','Ultra Rare',''),
    new Card(22,'Master with Eyes of Blue','Common',''),
    new Card(23,'The White Stone of Ancients','Ultra Rare',''),
    new Card(24,'Lector Pendulum, the Dracoverlord','Ultra Rare',''),
    new Card(25,'Amorphage Gluttony','Rare',''),
    new Card(26,'Amorphage Lechery','Ultra Rare',''),
    new Card(27,'Amorphage Greed','Rare',''),
    new Card(28,'Amorphage Envy','Rare',''),
    new Card(29,'Amorphage Wrath','Common',''),
    new Card(30,'Amorphage Pride','Common',''),
    new Card(31,'Amorphage Sloth','Secret Rare',''),
    new Card(32,'Amorphage Goliath','Super Rare',''),
    new Card(33,'Dinomist Spinos','Common',''),
    new Card(34,'Digital Bug Cocoondenser','Common',''),
    new Card(35,'Digital Bug Centibit','Common',''),
    new Card(36,'Digital Bug Websolder','Common',''),
    new Card(37,'Red-Eyes Toon Dragon','Super Rare',''),
    new Card(38,'Ryu Okami','Common',''),
    new Card(39,'Tenmataitei','Rare',''),
    new Card(40,'Spirit of the Fall Wind','Rare',''),
    new Card(41,'Ghost Reaper &amp; Winter Cherries','Secret Rare',''),
    new Card(42,'Gendo the Ascetic Monk','Common',''),
    new Card(43,'Deskbot 009','Common',''),
    new Card(44,'Dicelops','Common',''),
    new Card(45,'Amorphactor Pain, the Imagination Dracoverlord','Super Rare',''),
    new Card(46,'Bloom Prima the Melodious Choir','Rare',''),
    new Card(47,'Lunalight Cat Dancer','Rare',''),
    new Card(48,'Lunalight Panther Dancer','Ultra Rare',''),
    new Card(49,'Lunalight Leo Dancer','Super Rare',''),
    new Card(50,'Crystal Wing Synchro Dragon','Secret Rare',''),
    new Card(51,'Hi-Speedroid Puzzle','Rare',''),
    new Card(52,'Assault Blackwing - Chidori the Rain Sprinkling','Super Rare',''),
    new Card(53,'Blue-Eyes Spirit Dragon','Secret Rare',''),
    new Card(54,'Raidraptor - Ultimate Falcon','Super Rare',''),
    new Card(55,'Digital Bug Scaradiator','Common',''),
    new Card(56,'Digital Bug Corebage','Common',''),
    new Card(57,'Digital Bug Rhinosebus','Super Rare',''),
    new Card(58,'Fortissimo','Common',''),
    new Card(59,'Rank-Up-Magic Skip Force','Rare',''),
    new Card(60,'Mausoleum of White','Rare',''),
    new Card(61,'Beacon of White','Common',''),
    new Card(62,'Forge of the True Dracos','Common',''),
    new Card(63,'Amorphous Persona','Ultra Rare',''),
    new Card(64,'Amorphage Infection','Super Rare',''),
    new Card(65,'Bug Matrix','Common',''),
    new Card(66,'Pre-Preparation of Rites','Super Rare',''),
    new Card(67,'Fusion Tag','Rare',''),
    new Card(68,'Tuner\'s High','Super Rare',''),
    new Card(69,'Deskbot Base','Common',''),
    new Card(70,'Finite Cards','Common',''),
    new Card(71,'Re-dyce-cle','Common',''),
    new Card(72,'Lunalight Reincarnation Dance','Common',''),
    new Card(73,'Amorphage Lysis','Rare',''),
    new Card(74,'Dinomist Eruption','Common',''),
    new Card(75,'Bug Emergency','Common',''),
    new Card(76,'Drowning Mirror Force','Secret Rare',''),
    new Card(77,'Wonder Xyz','Common',''),
    new Card(78,'Rise to Full Height','Common',''),
    new Card(79,'Bad Aim','Common',''),
    new Card(80,'Unwavering Bond','Ultra Rare',''),
    new Card(81,'Graceful Tear','Common',''),
    new Card(82,'Cattle Call','Super Rare',''),
    new Card(83,'Kozmo Scaredy Lion','Super Rare',''),
    new Card(84,'Kozmoll Dark Lady','Secret Rare',''),
    new Card(85,'Kozmo Landwalker','Super Rare',''),
    new Card(86,'Kozmo Dark Planet','Secret Rare',''),
    new Card(87,'Kozmourning','Common',''),
    new Card(88,'Thunder King, the Lightningstrike Kaiju','Rare',''),
    new Card(89,'Super Anti-Kaiju War Machine Mecha-Dogoran','Rare',''),
    new Card(90,'The Kaiju Files','Common',''),
    new Card(91,'Cuben','Common',''),
    new Card(92,'World Carrotweight Champion','Common',''),
    new Card(93,'Fire King Island','Common',''),
    new Card(94,'Dwarf Star Dragon Planeter','Common',''),
    new Card(95,'Geargianchor','Common',''),
    new Card(96,'Geargia Change','Common',''),
    new Card(97,'Stardust Sifr Divine Dragon','Ultra Rare',''),
    new Card(98,'Hot Red Dragon Archfiend King Calamity','Ultra Rare',''),
    new Card(99,'Priestess with Eyes of Blue','Super Rare',''),
    new Card(100,'Blue-Eyes Twin Burst Dragon','Secret Rare',''),
];

var CARDS_IN_RARITY: CardsInRarity[] = [
    { rarity: 'Common', number: 5 },
    { rarity: 'Ultra Rare', number: 1 }
];

export var SHINING_VICTORIES: CardSet = {
    id: 1,
    name: 'Shining Victories',
    cards: CARDS,
    cardsInRarity: CARDS_IN_RARITY
};