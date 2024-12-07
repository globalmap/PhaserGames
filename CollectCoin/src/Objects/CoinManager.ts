import Phaser from "phaser";
import { ICoinManager } from "../types/ICoinManager";
import { Coin } from "../Objects/Coin";
import { Position } from "../types/common";

export class CoinManager implements ICoinManager {
  constructor(private scene: Phaser.Scene) {}

  spawnCoins(count: number): Coin[] {
    const coins: Coin[] = [];
    for (let i = 0; i < count; i++) {
      const position: Position = {
        x: Phaser.Math.Between(0, this.scene.sys.game.canvas.width),
        y: Phaser.Math.Between(0, this.scene.sys.game.canvas.height),
      };
      coins.push(new Coin(this.scene, position).setOrigin(0, 0));
    }
    return coins;
  }
}
