import { WASDInput } from "./input";
import { IPlayerInput } from "./IPlayerInput";

export class PlayerInput implements IPlayerInput {
  keys: WASDInput;

  constructor(input: Phaser.Input.Keyboard.KeyboardPlugin | null) {
    this.keys = input?.addKeys("W,S,A,D") as WASDInput;
  }

  isMovingLeft(): boolean {
    return this.keys.A.isDown;
  }

  isMovingRight(): boolean {
    return this.keys.D.isDown;
  }

  isMovingUp(): boolean {
    return this.keys.W.isDown;
  }

  isMovingDown(): boolean {
    return this.keys.S.isDown;
  }
}
