export interface ICoinCollector {
  collect(
    coin:
      | Phaser.Types.Physics.Arcade.GameObjectWithBody
      | Phaser.Physics.Arcade.Body
      | Phaser.Tilemaps.Tile,
  ): void;
}
