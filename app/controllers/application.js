import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked windowDimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  constructor() {
    super(...arguments);
    window.addEventListener('resize', () => this.updateWindowSize());
  }

  @action
  updateWindowSize() {
    this.windowDimensions = {
      width: window.innerWidth,
      height: window.innerHeight,
    };
  }

  get isMobile() {
    return Object.values(this.windowDimensions).some((dim) => dim < 800);
  }
}
