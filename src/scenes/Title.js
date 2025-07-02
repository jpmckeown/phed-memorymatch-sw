
// You can write more code here

/* START OF COMPILED CODE */

import BackgroundPrefab from "../prefabs/BackgroundPrefab.js";
import SceneClickHandler from "../scripts/scriptnodes/SceneClickHandler.js";
import StartScene from "../scripts/scriptnodes/StartScene.js";
/* START-USER-IMPORTS */
/* END-USER-IMPORTS */

export default class Title extends Phaser.Scene {

	constructor() {
		super("Title");

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/** @returns {void} */
	editorCreate() {

		// background
		const background = new BackgroundPrefab(this);
		this.add.existing(background);

		// title
		this.add.image(640, 246, "title");

		// clickToPlay
		const clickToPlay = this.add.image(640, 521, "clickToPlay");

		// sceneClickHandler
		const sceneClickHandler = new SceneClickHandler(clickToPlay);

		// startScene
		const startScene = new StartScene(sceneClickHandler);

		// sceneClickHandler (prefab fields)
		sceneClickHandler.autoExecute = true;

		// startScene (prefab fields)
		startScene.sceneName = "Level";

		this.events.emit("scene-awake");
	}

	/* START-USER-CODE */

	// Write your code here

	create() {

		this.editorCreate();
	}

	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
