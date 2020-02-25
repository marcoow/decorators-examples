import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import benchmark from '../decorators/benchmark';

export default class DataRoute extends Route {
  @inject
  session;

  beforeModel() {
    if (!this.session.loggedIn) {
      this.transitionTo('index');
    }
  }

  @benchmark('/data – model')
  async model() {
    return new Promise(function(resolve) {
      let delay = Math.random() * 1000;
      setTimeout(() => resolve({ data: [1, 2, 3] }), delay);
    });
  }
}
