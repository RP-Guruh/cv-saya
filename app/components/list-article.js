// app/components/data-display.js
import Component from '@glimmer/component';
import { inject as service } from '@ember/service';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class ListArticle extends Component {
  @service api;
  @tracked articles = [];
  sourcePhotoProfile = 'assets/images/photo.png';

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

  @action
  async updateSearch(query) {
    this.search = query;
    try {
      let response = await this.api.getData(query);
      this.articles = response.data;
    } catch (error) {
      console.error('Failed to fetch data', error);
    }
  }

  get filteredArticles() {
    if (!this.search) {
      return this.articles;
    }
    return this.articles.filter(article => 
      article.title.toLowerCase().includes(this.search.toLowerCase())
    );
  }
}
