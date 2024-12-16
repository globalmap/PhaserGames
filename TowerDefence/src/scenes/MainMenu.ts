import { Scene, GameObjects } from "phaser";
import { Button } from "../UI/Button";

export class MainMenu extends Scene {
  background: GameObjects.Image;
  logo: GameObjects.Image;
  startButton: Button;
  title: GameObjects.Text;

  constructor() {
    super("MainMenu");
  }

  create() {
    this.background = this.add.image(0, 0, "background").setOrigin(0);
    this.cameras.main.setBackgroundColor("rgba(71, 171, 169, 1)");

    this.startButton = new Button(
      this, // Поточна сцена
      512, // X-координата
      400, // Y-координата
      "buttonRed_Default", // Текстура за замовчуванням
      "buttonRed_Pressed", // Текстура при натисканні
      "Start Game", // Текст кнопки
      () => {
        console.log("Game Started!");
      }, // Дія при натисканні
    );

    // this.title.on("pointerdown", () => {
    //   this.scene.start("Level1");
    // });
  }
}
