import { Scene } from "phaser";
import Player from "../objects/Player";
import Enemy from "../objects/Enemy";

export class Game extends Scene {
  camera: Phaser.Cameras.Scene2D.Camera;
  background: Phaser.GameObjects.Image;
  player: Player;
  enemies: Enemy[] = [];
  map: Phaser.Tilemaps.Tilemap;

  constructor() {
    super("Game");
  }

  create() {
    this.setupCamera();
    this.loadMap();
    this.createEnemies();
  }

  setupCamera() {
    this.camera = this.cameras.main;
    this.camera.setBackgroundColor("#000000");
  }

  loadMap() {
    this.map = this.make.tilemap({ key: "city1" });
    const grassTileset = this.map.addTilesetImage(
      "Grass_Middle",
      "GrassMiddle",
    );
    const pathTileset = this.map.addTilesetImage("Path_Middle", "PathMiddle");
    const pathTiles = this.map.addTilesetImage("Path_Tile", "PathTiles");
    const decorations = this.map.addTilesetImage(
      "Outdoor_Decor",
      "decorations",
    );
    const bigTree = this.map.addTilesetImage("Oak_Tree_Big", "bigTree");
    const fences = this.map.addTilesetImage("Fences", "Fences");
    const house = this.map.addTilesetImage("House", "House");

    if (
      !grassTileset ||
      !pathTileset ||
      !pathTiles ||
      !decorations ||
      !bigTree
    ) {
      throw new Error("Tileset is null");
    }

    this.map.createLayer("Grass", grassTileset);
    this.map.createLayer("Path", pathTileset);
    this.map.createLayer("PathTiles", pathTiles);
    this.map.createLayer("Decoration", [decorations, bigTree]);
    const lightLayer = this.map.createLayer("Light", decorations);
    const fencesLayer = this.map.createLayer("Fences", fences);
    const houseLayer = this.map.createLayer("House", house);

    fencesLayer.setCollisionByProperty({ collides: true });
    houseLayer?.setCollisionByProperty({ collides: true });
    lightLayer?.setCollisionByProperty({ collides: true });

    this.createPlayer();
    this.physics.add.collider(this.player, fencesLayer);
    this.physics.add.collider(this.player, houseLayer);
    this.physics.add.collider(this.player, lightLayer);
  }

  createPlayer() {
    this.player = new Player(
      this,
      this.camera.centerX,
      this.camera.centerY,
      "playerSheet",
    );
    this.camera.startFollow(this.player);
    this.camera.setBounds(
      0,
      0,
      this.map.widthInPixels,
      this.map.heightInPixels,
    );
  }

  createEnemies() {
    this.enemies = [
      new Enemy(this, 100, this.camera.centerY, "slimeSheet"),
      new Enemy(this, 200, this.camera.centerY, "slimeSheet"),
      new Enemy(this, 300, this.camera.centerY, "slimeSheet"),
    ];

    this.enemies.forEach((enemy) => {
      enemy.setImmovable(true);

      this.physics.add.collider(this.player, enemy, () => {
        this.player.play("attackRight");
        enemy.takeDamage(this.player.damage);
      });
    });
  }

  update(): void {
    if (this.input.keyboard) {
      const wasdKeys = {
        W: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.W),
        A: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.A),
        S: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.S),
        D: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.D),
        Shift: this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SHIFT),
      };
      this.player.update(wasdKeys);

      if (
        this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE).isDown
      ) {
        this.player.play("attackRight");
      }
    }
  }
}
