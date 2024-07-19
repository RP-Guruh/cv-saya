// app/routes/application.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class ApplicationRoute extends Route {
  @service session;

  async beforeModel() {
    const existingToken = '1|K8Z9QGPyh7EBqAQpmeHOY1eToAovvxx9FzJMBmyo3332ccda'; // Token yang sudah ada

    if (existingToken) {
      try {
        await this.session.authenticate('authenticator:auth', existingToken);
      } catch (error) {
        console.error('Authentication failed', error);
      }
    }
  }
}
