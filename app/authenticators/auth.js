import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';
import { isEmpty } from '@ember/utils';

export default class AuthAutenticator extends Base {
  @service session;

  async authenticate(token) {
    // Langsung mengembalikan token yang sudah ada
    return { token };
  }

  async restore(data) {
    if (!isEmpty(data.token)) {
      return data;
    } else {
      throw new Error('Token is missing');
    }
  }

  async invalidate() {
    return;
  }
}
