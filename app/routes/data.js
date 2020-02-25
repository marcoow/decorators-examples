import Route from '@ember/routing/route';
import benchmark from '../decorators/benchmark';
import authenticated from '../decorators/authenticated';

@authenticated
export default class DataRoute extends Route {
  @benchmark('/data – model')
  async model() {
    return new Promise(function(resolve) {
      let delay = Math.random() * 1000;
      setTimeout(() => resolve({ data: [1, 2, 3] }), delay);
    });
  }
}
