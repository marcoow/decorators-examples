import { getOwner } from '@ember/application';

export default function(klass) {
  let original = klass.prototype.beforeModel;
  klass.prototype.beforeModel = function() {
    let session = getOwner(this).lookup('service:session');
    if (!session.loggedIn) {
      this.transitionTo('index');
    } else {
      if (original) {
        original.apply(this, ...arguments);
      }
    }
  }
}
