import { ICellConfig } from '@armathai/grid-core';
import { Phaser2Grid } from '../../Phaser2Grid';
import { getChildViewGridConfig, getMainViewGridConfig } from './grid-configs';

export class MainView extends Phaser2Grid {
  private _duckGroup!: Phaser.Group;
  private _childGrid!: Phaser2Grid;

  constructor(game: Phaser.Game) {
    super(game);

    this.build(this.getGridConfig());
  }

  public getGridConfig() {
    return getMainViewGridConfig();
  }

  public build(config: ICellConfig): void {
    super.build(config);

    this._buildGroup();
    this._buildChildGrid();
    this._setResizeListener();

    // TEST;
    setInterval(() => {
      this._duckGroup.rotation += 0.005;

      this.rebuild();
    }, 0);
  }

  _buildGroup() {
    const group = this.game.make.group();
    const duck1 = this.game.add.sprite(0, 0, 'duck');
    const duck2 = this.game.add.sprite(200, 0, 'duck');

    duck1.anchor.set(-2, 2);
    duck2.anchor.set(2, -2);

    group.add(duck1);
    group.add(duck2);

    this.setChild('main_1', (this._duckGroup = group));
  }

  _buildChildGrid() {
    const childView = new ChildView(this.game);
    this.setChild('main_2', (this._childGrid = childView));
  }

  _setResizeListener() {
    this.game.scale.setResizeCallback(this._onResize, this);
  }

  _onResize() {
    setTimeout(() => {
      this.rebuild(this.getGridConfig());
    }, 200);
  }
}

// tslint:disable-next-line: max-classes-per-file
class ChildView extends Phaser2Grid {
  constructor(game: Phaser.Game) {
    super(game);
    super.build(this.getGridConfig());
  }

  public getGridConfig() {
    return getChildViewGridConfig();
  }

  public postBuild(): void {
    const owl = this.game.make.sprite(0, 0, 'owl');
    owl.anchor.set(0.5);

    const parrotGroup = this.game.make.group();
    const parrot1 = this.game.make.sprite(200, 0, 'parrot');
    const parrot2 = this.game.make.sprite(-200, 0, 'parrot');

    parrotGroup.add(parrot1);
    parrotGroup.add(parrot2);

    const chick = this.game.make.sprite(0, 0, 'chick');
    const pixel = this.game.make.sprite(0, 0, 'pixel');

    this.setChild('child_1', owl);
    this.setChild('child_2', parrotGroup);
    this.setChild('child_3', chick);
    this.setChild('child_4', pixel);

    // TEST
    setInterval(() => {
      owl.rotation -= 0.005;
      parrotGroup.rotation += 0.005;
      chick.rotation += 0.005;
      pixel.rotation -= 0.005;

      this.rebuild();
    }, 0);
  }
}
