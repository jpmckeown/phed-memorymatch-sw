
// You can write more code here

/* START OF COMPILED CODE */

import BackgroundPrefab from "../prefabs/BackgroundPrefab.js";
import GamePlay from "../scripts/GamePlay.js";
import CardPrefab from "../prefabs/CardPrefab.js";
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

		// gamePlay
		new GamePlay(backgroundPrefab);

		// cardPrefab_1
		const cardPrefab_1 = new CardPrefab(this, 216, 127);
		this.add.existing(cardPrefab_1);

		// cardPrefab_2
		const cardPrefab_2 = new CardPrefab(this, 410, 127);
		this.add.existing(cardPrefab_2);

		// cardPrefab_1 (prefab fields)
		cardPrefab_1.cardFrontTextureConfig = {"key":"spritesheet","frame":"Bat.png"};

		// cardPrefab_2 (prefab fields)
		cardPrefab_2.cardFrontTextureConfig = {"key":"spritesheet","frame":"Cadle.png"};

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write more your code here

	create() {

		this.editorCreate();

	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
