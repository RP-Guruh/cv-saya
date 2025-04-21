import Component from '@glimmer/component';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service';

export default class FormSubmitComment extends Component {
  @service api;
  @service toast;
  @tracked name = '';
  @tracked email = '';
  @tracked phone = '';
  @tracked subject = '';
  @tracked message = '';
  @tracked isDisabled = false;

  @action
  updateName(event) {
    this.name = event.target.value;
  }

  @action
  updateEmail(event) {
    this.email = event.target.value;
  }

  @action
  updatePhone(event) {
    this.phone = event.target.value;
  }

  @action
  updateSubject(event) {
    this.subject = event.target.value;
  }

  @action
  updateMessage(event) {
    this.message = event.target.value;
  }

  get disabledSubmit() {
    return !this.name || !this.email || !this.message || !this.subject;
  }

  @action
  async onSubmit(event) {
    event.preventDefault();
    this.isDisabled = true;

    let data = {
      name: this.name,
      email: this.email,
      phone: this.phone,
      subject: this.subject,
      message: this.message,
    };

    try {
      await this.api.postData(data);

      // Reset halaman form
      this.name = '';
      this.email = '';
      this.phone = '';
      this.subject = '';
      this.message = '';
    } catch (error) {
      console.error('Failed to submit form', error);
    } finally {
      this.isDisabled = false;
    }
  }
}
