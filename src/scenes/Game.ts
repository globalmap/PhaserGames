import { Scene } from "phaser";
import { Player } from "../Objects/Player";
import { WASDInput } from "../types/input";
import { Coin } from "../Objects/Coin";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  msg_text: Phaser.GameObjects.Text;
  player: Player;
  keys: WASDInput;

  constructor() {
    super("Game");
  }

  prealod() {}

  create() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x00ff00);

    this.background = this.add.image(512, 384, "background");
    this.background.setAlpha(0.5);

    this.player = new Player(
      this,
      { x: 250, y: 350 },
      { width: 60, height: 60 },
    );

    new Coin(this, { x: 100, y: 400 }).setOrigin(0, 0);

    this.keys = this.input.keyboard?.addKeys("W,S,A,D") as WASDInput;

    // this.input.once("pointerdown", () => {
    //   this.scene.start("GameOver");
    // });
  }

  update(): void {
    this.handleMovementInput();
  }

  private handleMovementInput(): void {
    const movementSpeed = 7;
    let moved = false;

    // Handle horizontal movement
    if (this.keys.A.isDown) {
      this.player.x -= movementSpeed; // Move left
      moved = true;
    }
    if (this.keys.D.isDown) {
      this.player.x += movementSpeed; // Move right
      moved = true;
    }

    // Handle vertical movement
    if (this.keys.W.isDown) {
      this.player.y -= movementSpeed; // Move up
      moved = true;
    }
    if (this.keys.S.isDown) {
      this.player.y += movementSpeed; // Move down
      moved = true;
    }

    // Only check the bounds if the player has moved
    if (moved) {
      const sceneBounds = this.cameras.main.worldView;

      this.player.x = Phaser.Math.Clamp(
        this.player.x,
        sceneBounds.left,
        sceneBounds.right - this.player.displayWidth,
      );
      this.player.y = Phaser.Math.Clamp(
        this.player.y,
        sceneBounds.top,
        sceneBounds.bottom - this.player.displayHeight,
      );
    }
  }
}
