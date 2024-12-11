import { Position, Size } from "../types/common";

export class Player extends Phaser.GameObjects.Rectangle {
  constructor(scene: Phaser.Scene, position: Position, size: Size) {
    super(scene, position.x, position.y, size.width, size.height, 0xff0000);

    scene.add.existing(this);
    scene.physics.add.existing(this);

  }
}
