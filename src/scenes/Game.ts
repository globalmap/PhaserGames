import { Scene } from "phaser";
import { Player } from "../Objects/Player";
import { WASDInput } from "../types/input";

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
      { x: 512, y: 400 },
      { width: 60, height: 60 },
    );

    this.keys = this.input.keyboard?.addKeys("W,S,A,D") as WASDInput;

    // this.input.once("pointerdown", () => {
    //   this.scene.start("GameOver");
    // });
  }

  update(): void {
    if (this.keys.A.isDown) {
      console.log("LEFT");
    } else if (this.keys.D.isDown) {
      console.log("RIGHT");
    } else if (this.keys.S.isDown) {
      console.log("DOWN");
    } else if (this.keys.W.isDown) {
      console.log("UP");
    }
  }
}
