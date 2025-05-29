import { module, test } from 'qunit';
import { visit, currentURL, settled, fillIn, click} from '@ember/test-helpers';
import { setupApplicationTest } from 'task-manager/tests/helpers';
import setupMirage from 'ember-cli-mirage/test-support/setup-mirage';

module('Acceptance | tasks/task/edit', function (hooks) {
  setupApplicationTest(hooks);
  setupMirage(hooks);

  test('Creating a new task and vising the task details page to edit the task', async function (assert) {

    // Create a task first
    let task = this.server.create('task', {
      title: 'Initial Task Title',
      description: 'Initial Task Description',
      status: 'pending'
    });



    await visit(`/tasks/${task.id}/edit`);
    await settled();
    assert.strictEqual(currentURL(), '/tasks/1/edit');
  });

  test('Editing a task with valid input', async function (assert) {
    let task = this.server.create('task', {
      title: 'Initial Task Title',
      description: 'Initial Task Description',
      status: 'pending'
    });

    await visit(`/tasks/${task.id}/edit`);

    assert.strictEqual(currentURL(), `/tasks/${task.id}/edit`, 'visits the edit task page');

    await fillIn('[data-test-title]', 'Updated Task Title');
    await fillIn('[data-test-description]', 'Updated Task Description');
    await fillIn('[data-test-status]', 'completed');

    await click('[data-test-submit]');

    await settled();

    assert.ok(currentURL().startsWith('/tasks'), 'User is redirected to /tasks');
    assert.dom('[data-test-task-title]').includesText('Updated Task Title', 'Task title is updated');
  });

  test('Editing a task with invalid input for title', async function (assert) {
    let task = this.server.create('task', {
      title: 'Initial Task Title',
      description: 'Initial Task Description',
      status: 'pending'
    });

    await visit(`/tasks/${task.id}/edit`);

    assert.strictEqual(currentURL(), `/tasks/${task.id}/edit`, 'visits the edit task page');

    await fillIn('[data-test-title]', 'AT');
    await fillIn('[data-test-description]', 'Valid desc');

    await click('[data-test-submit]');

    assert.dom('[data-test-title-error]').exists('Title error is displayed');
  });

  test('Editing a task with invalid input for description', async function (assert) {
    let task = this.server.create('task', {
      title: 'Initial Task Title',
      description: 'Initial Task Description',
      status: 'pending'
    });

    await visit(`/tasks/${task.id}/edit`);

    assert.strictEqual(currentURL(), `/tasks/${task.id}/edit`, 'visits the edit task page');

    await fillIn('[data-test-title]', 'Valid Title');
    await fillIn('[data-test-description]', 'Short');

    await click('[data-test-submit]');

    assert.dom('[data-test-description-error]').exists('Description error is displayed');
  });

  test('Editing a task with empty input', async function (assert) {
    let task = this.server.create('task', {
      title: 'Initial Task Title',
      description: 'Initial Task Description',
      status: 'pending'
    });

    await visit(`/tasks/${task.id}/edit`);

    assert.strictEqual(currentURL(), `/tasks/${task.id}/edit`, 'visits the edit task page');

    await fillIn('[data-test-title]', '');
    await fillIn('[data-test-description]', '');

    await click('[data-test-submit]');

    assert.dom('[data-test-title-error]').exists('Title error is displayed');
    assert.dom('[data-test-description-error]').exists('Description error is displayed');
  });


});
