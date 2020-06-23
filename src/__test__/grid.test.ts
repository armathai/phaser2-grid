// tslint:disable-next-line: no-reference
/// <reference path="../../node_modules/phaser-ce/typescript/phaser.d.ts" />

import './phaser'
import { Phaser2Grid } from '../Phaser2Grid';

class TestGrid extends Phaser2Grid {
  getGridConfig() {
    return {
      name: 'name',
      bounds: { x: 0, y: 0, width: 0, height: 0 },
    };
  }
}

test('Phaser2 Grid', done => {
  function create(this: Phaser.State) {
    const grid = new TestGrid(this.game);
    this.add.existing(grid);
    done();
  }
  // tslint:disable-next-line: no-unused-expression
  new Phaser.Game(800, 600, Phaser.CANVAS, null, {
    create,
  });
});
