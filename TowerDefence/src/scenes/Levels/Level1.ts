export class Level1 extends Phaser.Scene {
  constructor() {
    super("Level1");
  }
  create() {
    this.cameras.main.setBackgroundColor("#47ABA9");

    const TILE_SIZE = 64;
    const WIDTH_MAP = 10;
    const HEIGHT_MAP = 8;

    //Sand
    this.add.image(80, 180, "flat").setCrop(320, 0, TILE_SIZE, TILE_SIZE);

    for (let i = 0; i < WIDTH_MAP; i++) {
      if (i < WIDTH_MAP - 1) {
        this.add.image(80 + TILE_SIZE * i, 180, "flat").setCrop(384, 0, 64, 64);
      } else {
        this.add
          .image(80 + TILE_SIZE * (WIDTH_MAP - 2), 180, "flat")
          .setCrop(384 + TILE_SIZE, 0, TILE_SIZE, TILE_SIZE);
      }
    }

    for (let i = 0; i < WIDTH_MAP; i++) {
      if (i < WIDTH_MAP - 1) {
        this.add
          .image(80 + TILE_SIZE * i, 180 + TILE_SIZE * (HEIGHT_MAP - 2), "flat")
          .setCrop(384, TILE_SIZE * 2, 64, 64);
      } else {
        this.add
          .image(
            80 + TILE_SIZE * (WIDTH_MAP - 2),
            180 + TILE_SIZE * (HEIGHT_MAP - 2),
            "flat",
          )
          .setCrop(384 + TILE_SIZE, TILE_SIZE * 2, TILE_SIZE, TILE_SIZE);
      }
    }

    for (let i = 0; i < HEIGHT_MAP; i++) {
      if (i < HEIGHT_MAP - 1) {
        this.add
          .image(80, 180 + TILE_SIZE * i, "flat")
          .setCrop(320, TILE_SIZE, TILE_SIZE, TILE_SIZE);
      } else {
        this.add
          .image(80, 180 + TILE_SIZE * (HEIGHT_MAP - 2), "flat")
          .setCrop(320, TILE_SIZE * 2, TILE_SIZE, TILE_SIZE);
      }
    }

    // this.add
    //   .image(this.cameras.main.centerX / 2, 300, "flat")
    //   .setCrop(320, 0, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2, 300, "flat")
    //   .setCrop(384, 0, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2 + 64, 300, "flat")
    //   .setCrop(384, 0, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2 + 64 + 64, 300, "flat")
    //   .setCrop(384, 0, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2 + 64 + 64 + 64, 300, "flat")
    //   .setCrop(384, 0, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64, 300, "flat")
    //   .setCrop(384, 0, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(384, 0, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(384, 0, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(384, 0, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(384, 0, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(384, 0, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(384, 0, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(448, 0, 64, 64);

    // this.add
    //   .image(this.cameras.main.centerX / 2, 300, "flat")
    //   .setCrop(320, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2, 300 + 64, "flat")
    //   .setCrop(320, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2, 300 + 64 + 64, "flat")
    //   .setCrop(320, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2, 300 + 64 + 64 + 64, "flat")
    //   .setCrop(320, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2, 300 + 64 + 64 + 64 + 64, "flat")
    //   .setCrop(320, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320, 64 + 64, 64, 64);

    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64 + 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64 + 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64 + 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64 + 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64 + 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64 + 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64 + 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64 + 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64 + 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64 + 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64 + 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64 + 64, 64 + 64, 64, 64);

    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300 + 64 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300 + 64 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300 + 64 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300 + 64 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(320 + 64 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64,
    //     300,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64, 300, "flat")
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2 + 64 + 64 + 64, 300, "flat")
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2 + 64 + 64, 300, "flat")
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2 + 64, 300, "flat")
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2, 300, "flat")
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2, 300 + 64, "flat")
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2 + 64, 300 + 64, "flat")
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2 + 64 + 64, 300 + 64, "flat")
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(this.cameras.main.centerX / 2 + 64 + 64 + 64, 300 + 64, "flat")
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64,
    //     300 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64,
    //     300 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 + 64 + 64 + 64 + 64 + 64 + 64 + 64 + 64,
    //     300 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
    // this.add
    //   .image(
    //     this.cameras.main.centerX / 2 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64 +
    //       64,
    //     300 + 64,
    //     "flat",
    //   )
    //   .setCrop(320 + 64, 64, 64, 64);
  }
}
