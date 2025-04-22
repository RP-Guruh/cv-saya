import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class PortofolioController extends Controller {
    isShowingModal = false;
    featuredImage = '';
    images = [];
  
    @action
    toggleModal(featuredImage, images) {
      this.setProperties({
        isShowingModal: true,
        featuredImage,
        images
      });
    }
  
    @action
    closeModal() {
      this.set('isShowingModal', false);
    }
}
