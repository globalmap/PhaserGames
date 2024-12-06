import { Scene } from "phaser";
import { Player } from "../Objects/Player";
import { Coin } from "../Objects/Coin";
import { CoinCollector } from "../types/CoinCollector";
import { Position } from "../types/common";
import { IPlayerInput } from "../types/IPlayerInput";
import { PlayerInput } from "../types/PlayerInput";

export class Game extends Scene {
  private camera: Phaser.Cameras.Scene2D.Camera;
  private background: Phaser.GameObjects.Image;
  private player: Player;
  private coins: Coin[] = [];
  private playerInput: IPlayerInput;

  constructor() {
    super("Game");
  }

  create() {
    this.physics.world.setBounds(
      0,
      0,
      this.sys.game.canvas.width,
      this.sys.game.canvas.height,
    );

    this.camera = this.cameras.main;
    this.camera.setBackgroundColor(0x00ff00);

    this.background = this.add.image(512, 384, "background");
    this.background.setAlpha(0.5);

    this.player = new Player(
      this,
      { x: 250, y: 350 },
      { width: 60, height: 60 },
    );

    for (let i = 0; i <= 20; i++) {
      const coinPosition: Position = {
        x: Phaser.Math.Between(0, this.sys.game.canvas.width),
        y: Phaser.Math.Between(0, this.sys.game.canvas.height),
      };
      this.coins.push(new Coin(this, coinPosition).setOrigin(0, 0));
    }

    this.playerInput = new PlayerInput(this.input.keyboard);
    this.physics.add.collider(
      this.coins,
      this.player,
      CoinCollector.collectCoin,
      undefined,
      this,
    );
  }

  update(): void {
    this.handleMovementInput();
  }

  private handleMovementInput(): void {
    const movementSpeed = 7;
    let moved = false;

    if (this.playerInput.isMovingLeft()) {
      this.player.x -= movementSpeed;
      moved = true;
    }
    if (this.playerInput.isMovingRight()) {
      this.player.x += movementSpeed;
      moved = true;
    }
    if (this.playerInput.isMovingUp()) {
      this.player.y -= movementSpeed;
      moved = true;
    }
    if (this.playerInput.isMovingDown()) {
      this.player.y += movementSpeed;
      moved = true;
    }

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
