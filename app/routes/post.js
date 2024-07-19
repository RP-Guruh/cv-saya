import Route from '@ember/routing/route';

export default class PostRoute extends Route {
  async model(params) {
    return params.post_id;
  }
}
