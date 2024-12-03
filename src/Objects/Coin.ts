import { Position } from "../types/common";

export class Coin extends Phaser.GameObjects.Sprite {
  constructor(scene: Phaser.Scene, position: Position) {
    super(scene, position.x, position.y, "coin");

    scene.add.existing(this);
  }
}
