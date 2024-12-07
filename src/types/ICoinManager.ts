import { Coin } from "../Objects/Coin";

export interface ICoinManager {
  spawnCoins(count: number): Coin[];
}
