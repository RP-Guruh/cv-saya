import { helper } from '@ember/component/helper';
import { inject as service } from '@ember/service';

export default helper(function currentRoute() {
  let router = service('router');
  return router.currentRouteName;
});
