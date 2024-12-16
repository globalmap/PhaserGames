import { Scene } from "phaser";

export class Button {
  private button: Phaser.GameObjects.Image;
  private label: Phaser.GameObjects.Text;

  constructor(
    scene: Scene,
    x: number,
    y: number,
    defaultTexture: string,
    pressedTexture: string,
    labelText: string,
    onClick: () => void,
  ) {
    // Додавання кнопки
    this.button = scene.add
      .image(x, y, defaultTexture)
      .setInteractive()
      .on("pointerdown", () => {
        this.button.setTexture(pressedTexture);
        this.label.setY(y - 4); // Невелике зміщення тексту вниз при натисканні
      })
      .on("pointerup", () => {
        this.button.setTexture(defaultTexture);
        this.label.setY(y - 8); // Повернення тексту
        onClick();
      })
      .on("pointerout", () => {
        this.button.setTexture(defaultTexture);
        this.label.setY(y - 8); // Повернення тексту, якщо курсор вийшов за межі
      });

    // Додавання тексту по центру кнопки
    this.label = scene.add
      .text(x, y - 8, labelText, {
        fontFamily: "Arial Black",
        fontSize: "16px",
        color: "#ffffff",
        stroke: "#000000",
        strokeThickness: 6,
        align: "center",
        shadow: {
          offsetX: 2,
          offsetY: 2,
          color: "#000000",
          blur: 2,
          fill: true,
        },
      })
      .setOrigin(0.5); // Центруємо текст по обох осях
  }
}
