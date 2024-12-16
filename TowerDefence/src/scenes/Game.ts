import { Scene } from "phaser";
import { Player } from "../Objects/Player";

export class Game extends Scene {
  private player: Player;
  constructor() {
    super("Game");
  }

  create(): void {
    // Camera setup
    this.cameras.main.setBackgroundColor("#cacaca");
    this.physics.world.setBounds(
      0,
      0,
      this.sys.game.canvas.width,
      this.sys.game.canvas.height,
    );

    this.player = new Player(
      this,
      { x: this.cameras.main.centerX, y: this.cameras.main.centerY },
      { width: 100, height: 100 },
    );
  }

  update(): void {
    console.log(this.player.active);
  }
}
