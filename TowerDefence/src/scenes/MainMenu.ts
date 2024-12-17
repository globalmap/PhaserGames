import { Scene, GameObjects } from "phaser";
import { Button } from "../UI/Button";

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  startButton: Button;
  title: GameObjects.Text;
  fire: GameObjects.Sprite;

  constructor() {
    super("MainMenu");
  }

  create() {
    this.background = this.add.image(0, 0, "background").setOrigin(0);
    this.cameras.main.setBackgroundColor("#47ABA9");

    // Приклад додавання анімації
    // this.anims.create({
    //   key: "fire",
    //   frames: this.anims.generateFrameNumbers("fireSheet", {
    //     frames: [0, 1, 2, 3, 4, 5, 6],
    //   }),
    //   frameRate: 10,
    //   repeat: -1,
    // });

    // this.fire = this.add.sprite(50, 50, "fireSheet");
    // this.fire.play("fire", true);

    // this.add.image(450, 300, "tileset").setCrop(0, 0, 192, 255); // Верхній лівий tile
    // this.add.image(700, 500, "tileset").setCrop(192, 0, 64, 255); // Наступний tile
    // this.add.image(100, 300, "tileset").setCrop(0, 128, 128, 128); // Нижній tile

    this.startButton = new Button(
      this, // Поточна сцена
      512, // X-координата
      400, // Y-координата
      "buttonRed_Default", // Текстура за замовчуванням
      "buttonRed_Pressed", // Текстура при натисканні
      "Start Game", // Текст кнопки
      () => {
        this.background.destroy();
        this.scene.start("Level1");
        console.log("Game Started!");
      },
    );

    // this.title.on("pointerdown", () => {
    //   this.scene.start("Level1");
    // });
  }
}
