import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ApplicationController extends Controller {
  @tracked windowDimensions = {
    width: window.innerWidth,
    height: window.innerHeight,
  };

  @tracked isSidebarOpen = false;

  get isMobile() {
    return Object.values(this.windowDimensions).some((dim) => dim < 800);
  }

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

    this.isSidebarOpen = false;
  }

  @action
  toggleSidebar() {
    this.isSidebarOpen = !this.isSidebarOpen;
  }
}
