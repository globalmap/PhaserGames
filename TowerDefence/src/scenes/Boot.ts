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
  }

  create() {
    this.scene.start("Preloader");
  }
}
