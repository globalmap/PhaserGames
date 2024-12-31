import { Boot } from './scenes/Boot';
import { Game as MainGame } from './scenes/Game';
import { GameOver } from './scenes/GameOver';
import { MainMenu } from './scenes/MainMenu';
import { Preloader } from './scenes/Preloader';
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
import { Game, Types } from "phaser";

const config: Types.Core.GameConfig = {
  type: Phaser.AUTO,
  width: 480,
  height: 320,
  parent: "game-container",
  backgroundColor: "#028af8",
  pixelArt: true,
  scale: {
    parent: "game-container",
    zoom: window.screen.availWidth / 480,
  },
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
    },
  },
  plugins: [
    {
      scene: {
        key: "rexUI",
        plugin: UIPlugin,
        mapping: "rexUI",
      },
    },
  ],
  scene: [Boot, Preloader, MainMenu, MainGame, GameOver],
};

export default new Game(config);
