import { module, test } from 'qunit';
import { setupRenderingTest } from 'my-project/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | recent-post', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<RecentPost />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <RecentPost>
        template block text
      </RecentPost>
    `);

    assert.dom().hasText('template block text');
  });
});
