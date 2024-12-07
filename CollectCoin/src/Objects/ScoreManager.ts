export class ScoreManager {
  private score: number = 0;
  private scoreText: Phaser.GameObjects.Text;

  constructor(private scene: Phaser.Scene) {
    this.scoreText = this.scene.add.text(16, 16, `Coins: ${this.score}`, {
      fontFamily: "Arial Black",
      fontSize: "24px",
      strokeThickness: 8,
      stroke: "#000000",
      color: "#ffffff",
    });
    this.scoreText.setScrollFactor(0);
  }

  incrementScore(): void {
    this.score += 1;
    this.updateText();
  }

  private updateText(): void {
    this.scoreText.setText(`Coins: ${this.score}`);
  }
}
