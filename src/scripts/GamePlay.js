
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
      console.log('awake', this.parent);
      this.cards.forEach((card, index) => {
         card.name = index;
      });

      this.memoryMatch = new MemoryMatch({
         cards: this.cards,
         onCardFlipCallback: (cardIndex) => { this.onCardFlipCallback(cardIndex);  },
         onMatchCallback: (firstIndex, secondIndex) => { this.onMatchCallback(firstIndex, secondIndex); },
         onMismatchCallback: (firstIndex, secondIndex) => { this.onMismatchCallback(firstIndex, secondIndex); },
         onGameOverCallback: () => { this.onGameOverCallback(); },
         howToCheckForMatch: (firstCard , secondCard) => { this.checkForMatch(firstCard, secondCard); },
         howToShuffle: (cards) => {}
      });
       
      this.scene.events.on('card-clicked', (card) => {
         console.log(card);
         this.memoryMatch.flipCard(card.name);
      })
      //console.log(this.memoryMatch.cards)
   }

   checkForMatch(firstCard, secondCard) {
      isMatch = firstCard.cardFrontTextureConfig.frame === secondCard.cardFrontTextureConfig.frame;
      return isMatch;
   }

   onCardFlipCallback(cardIndex) { 
      console.log(`Card flipped: ${cardIndex}`);
      this.cards[cardIndex].flip();
   }

   onMatchCallback(firstIndex, secondIndex) { 
      console.log(`Match found: ${firstIndex}, ${secondIndex}`); 
   }

   onMismatchCallback(firstIndex, secondIndex) {
      console.log(`Mismatch: ${firstIndex}, ${secondIndex}`);
      this.scene.time.delayedCall(1000, () => {
         this.cards[firstIndex].flip();
         this.cards[secondIndex].flip();
      });
   }
   onGameOverCallback() {
      console.log('Game Over! All cards matched!'); 
   }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
