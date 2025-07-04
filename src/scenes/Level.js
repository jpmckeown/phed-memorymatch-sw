
// You can write more code here

/* START OF COMPILED CODE */

import BackgroundPrefab from "../prefabs/BackgroundPrefab.js";
import CardPrefab from "../prefabs/CardPrefab.js";
import AnimationConfigBase from "../scripts/scriptnodes/AnimationConfigBase.js";
import GamePlay from "../scripts/GamePlay.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Level extends Phaser.Scene {

	constructor() {
		super("Level");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// backgroundPrefab
		const backgroundPrefab = new BackgroundPrefab(this);
		this.add.existing(backgroundPrefab);

		// cardContainer
		const cardContainer = this.add.container(640, 360);

		// cardPrefab_1
		const cardPrefab_1 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_1);

		// cardPrefab_2
		const cardPrefab_2 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_2);

		// cardPrefab_3
		const cardPrefab_3 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_3);

		// cardPrefab_4
		const cardPrefab_4 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_4);

		// cardPrefab_5
		const cardPrefab_5 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_5);

		// cardPrefab_6
		const cardPrefab_6 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_6);

		// cardPrefab_12
		const cardPrefab_12 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_12);

		// cardPrefab_7
		const cardPrefab_7 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_7);

		// cardPrefab_8
		const cardPrefab_8 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_8);

		// cardPrefab_9
		const cardPrefab_9 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_9);

		// cardPrefab_10
		const cardPrefab_10 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_10);

		// cardPrefab_11
		const cardPrefab_11 = new CardPrefab(this, 0, 0);
		cardContainer.add(cardPrefab_11);

		// nice
		this.add.image(640, 360, "nice");

		// clickToPlayAgain
		const clickToPlayAgain = this.add.image(640, 830, "clickToPlayAgain");

		// animationConfigBase
		const animationConfigBase = new AnimationConfigBase(clickToPlayAgain);

		// gamePlay
		const gamePlay = new GamePlay(this);

		// lists
		const cards = [cardPrefab_2, cardPrefab_1, cardPrefab_3, cardPrefab_4, cardPrefab_10, cardPrefab_9, cardPrefab_8, cardPrefab_7, cardPrefab_6, cardPrefab_5, cardPrefab_11, cardPrefab_12];

		// cardPrefab_1 (prefab fields)
		cardPrefab_1.cardFrontTextureConfig = {"key":"spritesheet","frame":"Bat.png"};

		// cardPrefab_2 (prefab fields)
		cardPrefab_2.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cadle.png"};

		// cardPrefab_3 (prefab fields)
		cardPrefab_3.cardFrontTextureConfig = {"key":"spritesheet","frame":"Bat.png"};

		// cardPrefab_4 (prefab fields)
		cardPrefab_4.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cadle.png"};

		// cardPrefab_5 (prefab fields)
		cardPrefab_5.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cat.png"};

		// cardPrefab_6 (prefab fields)
		cardPrefab_6.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cat.png"};

		// cardPrefab_12 (prefab fields)
		cardPrefab_12.cardFrontTextureConfig = {"key":"spritesheet","frame":"Skull.png"};

		// cardPrefab_7 (prefab fields)
		cardPrefab_7.cardFrontTextureConfig = {"key":"spritesheet","frame":"Pumpkin.png"};

		// cardPrefab_8 (prefab fields)
		cardPrefab_8.cardFrontTextureConfig = {"key":"spritesheet","frame":"Pumpkin.png"};

		// cardPrefab_9 (prefab fields)
		cardPrefab_9.cardFrontTextureConfig = {"key":"spritesheet","frame":"Candy.png"};

		// cardPrefab_10 (prefab fields)
		cardPrefab_10.cardFrontTextureConfig = {"key":"spritesheet","frame":"Candy.png"};

		// cardPrefab_11 (prefab fields)
		cardPrefab_11.cardFrontTextureConfig = {"key":"spritesheet","frame":"Skull.png"};

		// animationConfigBase (prefab fields)
		animationConfigBase.to = 628;
		animationConfigBase.from = 830;
		animationConfigBase.property = "y";
		animationConfigBase.autoExecute = true;
		animationConfigBase.delay = 2000;

		// gamePlay (prefab fields)
		gamePlay.cards = cards;
		gamePlay.cardContainer = cardContainer;

		this.cards = cards;

		this.events.emit("scene-awake");
	}

	/** @type {CardPrefab[]} */
	cards;

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
