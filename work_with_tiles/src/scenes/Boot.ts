import { Scene } from 'phaser';

export class Boot extends Scene {
  constructor() {
    super('Boot');
  }

  preload() {
    //  The Boot Scene is typically used to load in any assets you require for your Preloader, such as a game logo or background.
    //  The smaller the file size of the assets, the better, as the Boot Scene itself has no preloader.
    this.load.spritesheet("playerSheet", "assets/Player/Player.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
    this.load.spritesheet("slimeSheet", "assets/Enemies/Slime.png", {
      frameWidth: 32,
      frameHeight: 32,
    });
  }

  create() {
    this.scene.start('Preloader');
  }
}
