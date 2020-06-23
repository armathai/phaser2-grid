import { MainView } from './MainView';

class Game extends Phaser.Game {
  constructor() {
    super('100%', '100%', Phaser.CANVAS);
  }
}

// tslint:disable-next-line: max-classes-per-file
class ExampleState extends Phaser.State {
  public init() {
    this.stage.backgroundColor = '#cdcdcd';
    this.scale.scaleMode = Phaser.ScaleManager.RESIZE;
  }

  public preload() {
    this.load.image('chick', 'assets/chick.png');
    this.load.image('duck', 'assets/duck.png');
    this.load.image('owl', 'assets/owl.png');
    this.load.image('parrot', 'assets/parrot.png');
    this.load.image('pixel', 'assets/pixel.png');
  }

  public create() {
    this.add.existing(new MainView(this.game));
  }
}

document.onreadystatechange = () => {
  if (document.readyState === 'complete') {
    const game = new Game();
    game.state.add('ExampleState', ExampleState, true);

    window.game = game;
  }
};
