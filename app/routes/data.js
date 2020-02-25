import Route from '@ember/routing/route';

export default class DataRoute extends Route {
  async model() {
    return new Promise(function(resolve) {
      let delay = Math.random() * 1000;
      setTimeout(() => resolve({ data: [1, 2, 3] }), delay);
    });
  }
}
