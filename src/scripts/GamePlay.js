
// You can write more code here

/* START OF COMPILED CODE */

import ScriptNode from "../../phaserjs_editor_scripts_base/ScriptNode.js";
/* START-USER-IMPORTS */
import {MemoryMatch} from "./lib/memory-match.js"
/* END-USER-IMPORTS */

export default class GamePlay extends ScriptNode {

	constructor(parent) {
		super(parent);

		/* START-USER-CTR-CODE */
		// Write your code here.
		/* END-USER-CTR-CODE */
	}

	/* START-USER-CODE */

	// Write your code here.
   memoryMatch;
   awake() {
      console.log('awake');
      this.memoryMatch = new MemoryMatch({
         cards: [],
      });
   }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
