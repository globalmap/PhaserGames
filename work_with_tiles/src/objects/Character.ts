import Phaser from "phaser";

export default class Character extends Phaser.Physics.Arcade.Sprite {
  health: number;
  maxHealth: number;
  damage: number;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string, health: number, damage: number) {
    super(scene, x, y, texture);
    this.health = health;
    this.maxHealth = health;
    this.damage = damage;

    scene.add.existing(this);
    scene.physics.add.existing(this);

    // Ensure the body is properly initialized before setting its size
    if (this.body instanceof Phaser.Physics.Arcade.Body) {
      this.body.setSize(this.width * 0.5, this.height * 0.6);
    }
  }

  takeDamage(damage: number) {
    this.health -= damage;
    if (this.health <= 0) {
      this.destroy();
    }

    console.log(
      `${this.constructor.name} took ${damage} damage. ${this.health} HP left.`,
    );
  }
}