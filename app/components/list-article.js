// app/components/data-display.js
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ListArticle extends Component {
  @service api;
  @tracked articles = [];


  constructor() {
    super(...arguments);
    this.loadData();
  }

  @action
  async loadData() {
    try {
        let response = await this.api.getData();
        this.articles = response.data;
      
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }
}
