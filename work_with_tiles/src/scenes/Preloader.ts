import { Scene } from "phaser";

export class Preloader extends Scene {
  constructor() {
    super("Preloader");
  }

  init() {
    this.createProgressBar();
  }

  createProgressBar() {
    this.add.rectangle(512, 384, 468, 32).setStrokeStyle(1, 0xffffff);
    const bar = this.add.rectangle(512 - 230, 384, 4, 28, 0xffffff);

    this.load.on("progress", (progress: number) => {
      bar.width = 4 + 460 * progress;
    });
  }

  preload() {
    this.loadAssets();
    this.createAnimations();
  }

  loadAssets() {
    const assets = [
      {
        type: "image",
        key: "PathMiddle",
        path: "assets/Tiles/Path_Middle.png",
      },
      {
        type: "image",
        key: "GrassMiddle",
        path: "assets/Tiles/Grass_Middle.png",
      },
      { type: "image", key: "PathTiles", path: "assets/Tiles/Path_Tile.png" },
      {
        type: "image",
        key: "decorations",
        path: "assets/Outdoor decoration/Outdoor_Decor_Free.png",
      },
      {
        type: "image",
        key: "bigTree",
        path: "assets/Outdoor decoration/Oak_Tree.png",
      },
      {
        type: "image",
        key: "Fences",
        path: "assets/Outdoor decoration/Fences.png",
      },
      {
        type: "image",
        key: "House",
        path: "assets/Outdoor decoration/House.png",
      },
      { type: "tilemapTiledJSON", key: "city1", path: "assets/city1.json" },
    ];

    assets.forEach((asset) => {
      if (asset.type === "image") {
        this.load.image(asset.key, asset.path);
      } else if (asset.type === "tilemapTiledJSON") {
        this.load.tilemapTiledJSON(asset.key, asset.path);
      }
    });
  }

  createAnimations() {
    this.createPlayerAnimations();
    this.createEnemyAnimations();
  }

  createPlayerAnimations() {
    const playerAnimations = [
      { key: "idleDefault", start: 0, end: 5, frameRate: 6, repeat: -1 },
      { key: "walkRight", start: 24, end: 29, frameRate: 6, repeat: -1 },
      { key: "walkTop", start: 30, end: 35, frameRate: 6, repeat: -1 },
      { key: "walkBottom", start: 18, end: 23, frameRate: 6, repeat: -1 },
      { key: "attackRight", start: 38, end: 41, frameRate: 4 },
    ];

    playerAnimations.forEach((anim) => {
      this.anims.create({
        key: anim.key,
        frames: this.anims.generateFrameNumbers("playerSheet", {
          start: anim.start,
          end: anim.end,
        }),
        frameRate: anim.frameRate,
        repeat: anim.repeat,
      });
    });
  }

  createEnemyAnimations() {
    this.anims.create({
      key: "slimeIdle",
      frames: this.anims.generateFrameNumbers("slimeSheet", {
        start: 0,
        end: 3,
      }),
      frameRate: 4,
      repeat: -1,
    });
  }

  create() {
    this.scene.start("Game");
  }
}
