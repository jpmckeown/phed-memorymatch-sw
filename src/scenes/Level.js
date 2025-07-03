
// You can write more code here

/* START OF COMPILED CODE */

import BackgroundPrefab from "../prefabs/BackgroundPrefab.js";
import CardPrefab from "../prefabs/CardPrefab.js";
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

		// cardPrefab_1
		const cardPrefab_1 = new CardPrefab(this, 200, 127);
		this.add.existing(cardPrefab_1);

		// cardPrefab_2
		const cardPrefab_2 = new CardPrefab(this, 400, 127);
		this.add.existing(cardPrefab_2);

		// cardPrefab_3
		const cardPrefab_3 = new CardPrefab(this, 600, 127);
		this.add.existing(cardPrefab_3);

		// cardPrefab_4
		const cardPrefab_4 = new CardPrefab(this, 800, 127);
		this.add.existing(cardPrefab_4);

		// gamePlay
		const gamePlay = new GamePlay(this);

		// lists
		const cards = [cardPrefab_2, cardPrefab_1, cardPrefab_3, cardPrefab_4];

		// cardPrefab_1 (prefab fields)
		cardPrefab_1.cardFrontTextureConfig = {"key":"spritesheet","frame":"Bat.png"};

		// cardPrefab_2 (prefab fields)
		cardPrefab_2.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cadle.png"};

		// cardPrefab_3 (prefab fields)
		cardPrefab_3.cardFrontTextureConfig = {"key":"spritesheet","frame":"Bat.png"};

		// cardPrefab_4 (prefab fields)
		cardPrefab_4.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cadle.png"};

		// gamePlay (prefab fields)
		gamePlay.cards = cards;

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
