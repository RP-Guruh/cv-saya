import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class SearchBar extends Component {

  @action
  updateValue(event) {
    this.args.onSearch(event.target.value);
  }
}
