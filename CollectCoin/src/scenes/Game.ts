import { Scene } from "phaser";
import { Player } from "../Objects/Player";
import { CoinManager } from "../Objects/CoinManager";
import { CoinCollector } from "../Objects/CoinCollector";
import { ScoreManager } from "../Objects/ScoreManager";

export class Game extends Scene {
  private player: Player;
  private coins: Phaser.GameObjects.GameObject[] = [];
  private scoreManager: ScoreManager;
  private coinManager: CoinManager;
  private coinCollector: CoinCollector;
  private gameOverText: Phaser.GameObjects.Text | null = null;

  constructor() {
    super("Game");
  }

  create(): void {
    // Camera setup
    this.cameras.main.setBackgroundColor(0x00ff00);
    this.physics.world.setBounds(
      0,
      0,
      this.sys.game.canvas.width,
      this.sys.game.canvas.height,
    );

    // Initialize managers
    this.coinManager = new CoinManager(this);
    this.coinCollector = new CoinCollector();
    this.scoreManager = new ScoreManager(this);

    // Player setup
    this.player = new Player(
      this,
      { x: 250, y: 350 },
      { width: 60, height: 60 },
    );

    // Spawn coins
    this.coins = this.coinManager.spawnCoins(20);

    // Add collisions
    this.coins.forEach((coin) => {
      this.physics.add.overlap(
        this.player,
        coin,
        this.handleCoinCollection,
        undefined,
        this,
      );
    });
  }

  update(): void {
    if (this.player.active) {
      this.handleMovementInput();
    }
  }

  private handleMovementInput(): void {
    const movementSpeed = 7;
    if (this.input.keyboard) {
      if (this.input.keyboard.addKey("A").isDown)
        this.player.x -= movementSpeed;
      if (this.input.keyboard.addKey("D").isDown)
        this.player.x += movementSpeed;
      if (this.input.keyboard.addKey("W").isDown)
        this.player.y -= movementSpeed;
      if (this.input.keyboard.addKey("S").isDown)
        this.player.y += movementSpeed;
    }
  }

  private handleCoinCollection(
    _: unknown,
    coin:
      | Phaser.Types.Physics.Arcade.GameObjectWithBody
      | Phaser.Physics.Arcade.Body
      | Phaser.Tilemaps.Tile,
  ): void {
    this.coinCollector.collect(coin);
    this.scoreManager.incrementScore();

    // Remove the collected coin from the array
    this.coins = this.coins.filter((c) => c !== coin);

    // Check if all coins are collected
    if (this.coins.length === 0) {
      this.triggerGameOver();
    }
  }

  private triggerGameOver(): void {
    this.gameOverText = this.add.text(
      this.cameras.main.centerX,
      this.cameras.main.centerY,
      "Game Over",
      {
        fontSize: "48px",
        color: "#ffffff",
      },
    );
    this.gameOverText.setOrigin(0.5, 0.5);
    this.gameOverText.setScrollFactor(0);

    // Stop the player
    this.player.setActive(false);
    this.player.setVisible(false);
  }
}
