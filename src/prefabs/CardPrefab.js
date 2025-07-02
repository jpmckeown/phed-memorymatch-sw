
// You can write more code here

/* START OF COMPILED CODE */

/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class CardPrefab extends Phaser.GameObjects.Image {

	constructor(scene, x, y, texture, frame) {
		super(scene, x ?? 0, y ?? 0, texture || "spritesheet", frame ?? "Verse.png");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @type {{key:string,frame?:string|number}} */
	cardFrontTextureConfig;
	/** @type {{key:string,frame?:string|number}} */
	cardBackTextureConfig = {"key":"spritesheet","frame":"Verse.png"};

	/* START-USER-CODE */

	// Write your code here.

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
