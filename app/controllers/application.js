import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject } from '@ember/service';

export default class ApplicationController extends Controller {
  @inject
  session;

  @action
  login() {
    this.session.set('loggedIn', true);
  }

  @action
  logout() {
    this.session.set('loggedIn', false);
  }
}
