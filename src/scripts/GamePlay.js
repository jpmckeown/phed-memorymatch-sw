
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
	/** @type {Phaser.GameObjects.GameObject} */
	cardContainer;

	/* START-USER-CODE */

	// Write your code here.
   memoryMatch;
   lockInput = true;

   awake() {
      this.lockInput = true;
      this.cards.forEach((card, index) => {
         card.name = index;
      });

      this.memoryMatch = new MemoryMatch({
         cards: this.cards,
         onCardFlipCallback: (cardIndex) => { this.onCardFlipCallback(cardIndex);  },
         onMatchCallback: (firstIndex, secondIndex) => { this.onMatchCallback(firstIndex, secondIndex); },
         onMismatchCallback: (firstIndex, secondIndex) => { this.onMismatchCallback(firstIndex, secondIndex); },
         onGameOverCallback: () => { this.onGameOverCallback(); },
         howToCheckForMatch: (firstCard , secondCard) => { return this.checkForMatch(firstCard, secondCard); }
      });

      this.scene.events.on('card-clicked', (card) => {
         if (this.lockInput) { return; }
         this.memoryMatch.flipCard(card.name);
      })
      this.dealCards();
   }

   dealCards() {
       this.cardContainer.setY(1000);
       this.scene.tweens.add({
         targets: this.cardContainer,
         y: 360,
         duration: 1000,
         ease: Phaser.Math.Easing.Sine.InOut,
         onComplete: () => {
            this.cards.forEach((card, index) => {
               const row = Math.floor(index/4);
               const col = index % 4;
               const x = (160 + col * 320) - 640;
               const y = (120 + row * 240) - 360;
               card.name = index;
               //card.setPosition(x,y);
               this.moveCard(card,x,y,index);
            });
         }
       });
       this.scene.time.delayedCall(3400, () => { // 2000 + 12 * 200, pack + deal
          this.lockInput = false;
       }); 
   }

   moveCard(card, x, y, index) {
       this.scene.tweens.add({
         targets: card,
         x,
         y,
         duration: 200,
         delay: 200 * index,
         ease: Phaser.Math.Easing.Sine.InOut,
       })   
   }

   checkForMatch(firstCard, secondCard) {
      //isMatch = firstCard.cardFrontTextureConfig.frame === secondCard.cardFrontTextureConfig.frame;
      return firstCard.cardFrontTextureConfig.frame === secondCard.cardFrontTextureConfig.frame;
   }

   onCardFlipCallback(cardIndex) { 
      console.log(`Card flipped: ${cardIndex}`);
      this.cards[cardIndex].flip();
   }

   onMatchCallback(firstIndex, secondIndex) { 
      console.log(`Match found: ${firstIndex}, ${secondIndex}`); 
   }

   onMismatchCallback(firstIndex, secondIndex) {
      this.lockInput = true;
      console.log(`Mismatch: ${firstIndex}, ${secondIndex}`);
      this.scene.time.delayedCall(1000, () => {
         this.cards[firstIndex].flip();
         this.cards[secondIndex].flip();
         this.lockInput = false;
      });
   }
   onGameOverCallback() {
      console.log('Game Over! All cards matched!'); 
   }
	/* END-USER-CODE */
}

/* END OF COMPILED CODE */

// You can write more code here
