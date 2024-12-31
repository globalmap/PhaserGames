import Phaser from "phaser";
import Character from "./Character";

export default class Player extends Character {
  private speed: number = 60;

  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture, 100, 10);
    this.play("idleDefault");
  }

  update(keys: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
    Shift: Phaser.Input.Keyboard.Key;
  }) {
    this.handleMovement(keys);
    this.handleSpeed(keys);
  }

  private handleMovement(keys: {
    W: Phaser.Input.Keyboard.Key;
    A: Phaser.Input.Keyboard.Key;
    S: Phaser.Input.Keyboard.Key;
    D: Phaser.Input.Keyboard.Key;
  }) {
    if (keys.A.isDown) {
      this.setVelocityX(-this.speed);
      this.flipX = true;
      this.play("walkRight", true);
    } else if (keys.D.isDown) {
      this.flipX = false;
      this.setVelocityX(this.speed);
      this.play("walkRight", true);
    } else {
      this.setVelocityX(0);
      this.play("idleDefault");
    }

    if (keys.W.isDown) {
      this.flipX = false;
      this.setVelocityY(-this.speed);
      this.play("walkTop", true);
    } else if (keys.S.isDown) {
      this.flipX = false;
      this.setVelocityY(this.speed);
      this.play("walkBottom", true);
    } else {
      this.setVelocityY(0);
    }
  }

  private handleSpeed(keys: { Shift: Phaser.Input.Keyboard.Key }) {
    this.speed = keys.Shift.isDown ? 120 : 60;
  }
}
