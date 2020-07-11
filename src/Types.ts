import { ICellConfig } from '@armathai/grid-core';

export type IPhaser2Child = PIXI.DisplayObjectContainer & {
  destroy(...args: any[]): void;
  resize?(width: number, height: number): void;
  postBuild?(): void;
};

export type IPhaser2Grid = IPhaser2Child & {
  getGridConfig(): ICellConfig;
  rebuild(config?: ICellConfig): void;
};

export type IContent = IPhaser2Child | IPhaser2Grid;

declare global {
  interface Window {
    game: Phaser.Game;
  }
}
