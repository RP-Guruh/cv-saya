import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class SearchBar extends Component {
  @tracked count = 0;
  @tracked value = '';

  get timesTen() {
    return this.count * 10;
  }

  get valueSearch() {
    return this.value;
  }

  @action
  plusOne() {
    this.count += 1;
  }

  @action
  updateValue(event) {
    this.value = event.target.value;
  }
}