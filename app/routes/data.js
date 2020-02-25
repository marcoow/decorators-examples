import Route from '@ember/routing/route';
import benchmark from '../decorators/benchmark';

export default class DataRoute extends Route {
  @benchmark('/data – model')
  async model() {
    return new Promise(function(resolve) {
      let delay = Math.random() * 1000;
      setTimeout(() => resolve({ data: [1, 2, 3] }), delay);
    });
  }
}
