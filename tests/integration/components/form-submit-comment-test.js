import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | form-submit-comment', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<FormSubmitComment />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <FormSubmitComment>
        template block text
      </FormSubmitComment>
    `);

    assert.dom().hasText('template block text');
  });
});
