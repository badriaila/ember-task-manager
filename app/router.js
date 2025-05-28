import EmberRouter from '@ember/routing/router';
import config from 'task-manager/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('register');
  this.route('login');
  this.route('tasks', function () {
    this.route('task', {path: '/:task_id'}, function() {
      this.route('edit');
    });
    this.route('new');
  });
  this.route('history');
});
