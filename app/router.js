import EmberRouter from '@ember/routing/router';
import config from 'my-project/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('about');
  this.route('post', { path: '/post/:post_id' });
  this.route('portofolio');
});
