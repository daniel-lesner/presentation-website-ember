import EmberRouter from '@ember/routing/router';
import config from 'presentation-website-ember/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index', { path: '/' });
  this.route('experience');
  this.route('education');
  this.route('projects');
  this.route('contact');
  this.route('not-found', {
    path: '/*path',
  });
});
