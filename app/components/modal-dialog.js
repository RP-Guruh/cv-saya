import Component from '@glimmer/component';
import { action } from '@ember/object';

export default class ModalDialogComponent extends Component {
  @action
  closeModal(event) {
    event.stopPropagation(); // Cegah agar klik modal tidak menutup
    if (typeof this.args.onClose === 'function') {
      this.args.onClose(); // Memanggil fungsi close dari parent untuk menutup modal
    }
  }
}
