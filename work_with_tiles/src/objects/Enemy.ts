import Phaser from "phaser";
import Character from "./Character";

export default class Enemy extends Character {
  constructor(scene: Phaser.Scene, x: number, y: number, texture: string) {
    super(scene, x, y, texture, 100, 10);
    this.play("slimeIdle");
  }
}