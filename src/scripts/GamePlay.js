
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

	/** @type {CardPrefab[]} */
	cards = [];

	/* START-USER-CODE */

	// Write your code here.
   memoryMatch;
   awake() {
      console.log('awake');
      this.memoryMatch = new MemoryMatch({
         cards: this.cards,
         onCardFlipCallback: (cardIndex) => { this.onCardFlipCallback(cardIndex);  },
         onMatchCallback: (firstIndex, secondIndex) => { this.onMatchCallback(firstIndex, secondIndex); },
         onMismatchCallback: (firstIndex, secondIndex) => { this.onMismatchCallback(firstIndex, secondIndex); },
         onGameOverCallback: () => { this.onGameOverCallback(); },
         howToCheckForMatch: (firstCard , secondCard) => { this.checkForMatch(firstCard, secondCard); },
         howToShuffle: (cards) => {}
      });
      console.log(this.memoryMatch.cards)
   }

   checkForMatch(firstCard, secondCard) {
      //
   }

   onCardFlipCallback(cardIndex) { 
      console.log(`Card flipped: ${cardIndex}`); 
   }
   onMatchCallback(firstIndex, secondIndex) { 
      console.log(`Match found: ${firstIndex}, ${secondIndex}`); 
   }
   onMismatchCallback(firstIndex, secondIndex) {
      console.log(`Mismatch: ${firstIndex}, ${secondIndex}`);
   }
   onGameOverCallback() {
      console.log('Game Over! All cards matched!'); 
   }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
