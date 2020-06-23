import { CellAlign, CellScale, ICellConfig, Rect } from '@armathai/grid-core';

function getCanvasBounds(): Rect {
  return new Rect(0, 0, window.game.scale.width, window.game.scale.height);
}

export function getMainViewGridConfig(): ICellConfig {
  return window.game.scale.isLandscape ? getMainViewGridLandscapeConfig() : getMainViewGridPortraitConfig();
}

function getMainViewGridPortraitConfig(): ICellConfig {
  return {
    name: 'main',
    bounds: getCanvasBounds(),
    debug: { color: 0x00c56a },
    cells: [
      {
        name: 'main_1',
        bounds: { x: 0, y: 0, width: 0.5, height: 1 },
        padding: 0.1,
      },
      {
        name: 'main_2',
        bounds: { x: 0.5, y: 0 },
      },
    ],
  };
}

function getMainViewGridLandscapeConfig(): ICellConfig {
  return {
    name: 'main',
    bounds: getCanvasBounds(),
    debug: { color: 0x00c56a },
    cells: [
      {
        name: 'main_1',
        bounds: { x: 0, y: 0, width: 0.4, height: 1 },
      },
      {
        name: 'main_3',
        bounds: { x: 0.4, y: 0, width: 0.3, height: 1 },
      },
      {
        name: 'main_2',
        bounds: { x: 0.7, y: 0, width: 0.3, height: 1 },
      },
    ],
  };
}

export function getChildViewGridConfig(): ICellConfig {
  return {
    name: 'child',
    debug: { color: 0xd62b19 },
    cells: [
      {
        name: 'child_1',
        debug: { color: 0xa16639, fill: true },
        bounds: { x: 0, height: 0.25 },
        align: CellAlign.LeftTop,
        padding: 0.1,
      },
      {
        name: 'child_2',
        bounds: { x: 0, height: 0.25 },
      },
      {
        name: 'child_3',
        bounds: { x: 0, height: 0.25 },
        align: CellAlign.RightBottom,
      },
      {
        name: 'child_4',
        debug: { color: 0xffffff },
        bounds: { x: 0, height: '100' },
        padding: 0.2,
        scale: CellScale.ShowAll,
      },
    ],
  };
}
