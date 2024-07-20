import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class PostRoute extends Route {
  @service api;
  @tracked detail;

    constructor() {
    super(...arguments);
    this.model();
  }
  @action
  async model(params) {

    try {
        let response = await this.api.detailData(params.post_id);
        this.detail = response.data;
        console.log(this.detail.body);
        return {
          title: this.detail.title,
          body: this.detail.body,
          created_at: this.detail.created_at,
          updated_at: this.detail.updated_at,
          created_by: this.detail.user.name,
          tags: this.detail.tags
        }
      
    } catch (error) {
      console.error('Failed to fetch data', error);
    }

  }

   
  }




