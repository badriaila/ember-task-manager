import { module, test } from 'qunit';
import { visit, currentURL } from '@ember/test-helpers';
import { setupApplicationTest } from 'task-manager/tests/helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | tasks/task/edit', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  
  test('visiting /tasks/task/edit', async function (assert) {
    await visit('/tasks/task/edit');

    assert.strictEqual(currentURL(), '/tasks/task/edit');
  });
});
