import { module, test } from 'qunit';
import { visit, currentURL, fillIn, click, settled } from '@ember/test-helpers';
import { setupApplicationTest } from 'task-manager/tests/helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | tasks/new', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('visiting /tasks/new page', async function (assert) {
    await visit('/tasks/new');

    assert.strictEqual(currentURL(), '/tasks/new', 'visits the new task page');

  });

  test('Adding a new test with valid input', async function(assert){
    await visit('/tasks/new');

    assert.strictEqual(currentURL(), '/tasks/new', 'visits the new task page');

    await fillIn('[data-test-title]', 'Acceptance Test Task');
    await fillIn('[data-test-description]', 'This is a description for the acceptance test task');
    await fillIn('[data-test-status]', 'pending');

    await click('[data-test-submit]');

    await settled();
    
    assert.ok(currentURL().startsWith('/tasks'), 'User is redirected to /tasks');
    assert.dom('[data-test-task-title]').includesText('Acceptance Test Task', 'New task title is displayed');
  });

  test('Adding a new task with invalid input for title', async function(assert) {
    await visit('/tasks/new');

    assert.strictEqual(currentURL(), '/tasks/new', 'visits the new task page');

    await fillIn('[data-test-title]', 'AT');
    await fillIn('[data-test-description]', 'Valid desc');

    await click('[data-test-submit]');

    assert.dom('[data-test-title-error]').exists('Title error is displayed');
  });

  test('Adding a new task with invalid input for description', async function(assert) {
    await visit('/tasks/new');

    assert.strictEqual(currentURL(), '/tasks/new', 'visits the new task page');

    await fillIn('[data-test-title]', 'Valid Title');
    await fillIn('[data-test-description]', 'Short');

    await click('[data-test-submit]');

    assert.dom('[data-test-description-error]').exists('Description error is displayed');
  });

  test('Adding a new task with empty input', async function(assert) {
    await visit('/tasks/new');

    assert.strictEqual(currentURL(), '/tasks/new', 'visits the new task page');

    await fillIn('[data-test-title]', '');
    await fillIn('[data-test-description]', '');

    await click('[data-test-submit]');

    assert.dom('[data-test-title-error]').exists('Title error is displayed');
    assert.dom('[data-test-description-error]').exists('Description error is displayed');
  });




});
