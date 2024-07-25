import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SidebarComponent extends Component {
  @action
  onLinkClick(event) {
    event.preventDefault();
    event.stopPropagation();

    if (this.args.toggleSidebar) this.args.toggleSidebar();
  }
}
