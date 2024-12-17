import { Scene } from "phaser";

export class Boot extends Scene {
  constructor() {
    super("Boot");
  }

  preload() {
    //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
    //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.

    this.load.image("background", "assets/bg.png");
    this.load.image(
      "buttonRed_Default",
      "assets/Buttons/Button_Red_3Slides.png",
    );
    this.load.image(
      "buttonRed_Pressed",
      "assets/Buttons/Button_Red_3Slides_Pressed.png",
    );
    this.load.spritesheet("fireSheet", "assets/Fire.png", {
      frameWidth: 128,
      frameHeight: 128,
    });

    //TileMap Terrain Ground
    this.load.image(
      "elevation",
      "assets/TileMap/Terrain/Tilemap_Elevation.png",
    );
    this.load.image("flat", "assets/TileMap/Terrain/Tilemap_Flat.png");
    this.load.image("shadow", "assets/TileMap/Terrain/Shadows.png");

    //Deco
    this.load.image("mushroom_S", "assets/Deco/01.png");
    this.load.image("mushroom_M", "assets/Deco/02.png");
    this.load.image("mushroom_L", "assets/Deco/03.png");
    this.load.image("stone_S", "assets/Deco/04.png");
    this.load.image("stone_M", "assets/Deco/05.png");
    this.load.image("stone_L", "assets/Deco/06.png");
    this.load.image("bush_S", "assets/Deco/07.png");
    this.load.image("bush_M", "assets/Deco/08.png");
    this.load.image("bush_L", "assets/Deco/09.png");



  }

  create() {
    this.scene.start("Preloader");
  }
}
