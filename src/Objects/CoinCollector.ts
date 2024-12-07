import { ICoinCollector } from "../types/ICoinCollector";

export class CoinCollector implements ICoinCollector {
  collect(
    coin:
      | Phaser.Types.Physics.Arcade.GameObjectWithBody
      | Phaser.Physics.Arcade.Body
      | Phaser.Tilemaps.Tile,
  ): void {
    console.log("Coin collected!");
    coin.destroy();
  }
}
