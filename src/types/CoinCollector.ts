import { Coin } from "../Objects/Coin";

export class CoinCollector {
  static collectCoin(
    coin:
      | Phaser.Types.Physics.Arcade.GameObjectWithBody
      | Phaser.Physics.Arcade.Body
      | Phaser.Tilemaps.Tile,
  ): void {
    if (coin instanceof Coin) {
      console.log("Coin collected!");
      coin.destroy(); // Remove the coin after collection
    }
  }
}
