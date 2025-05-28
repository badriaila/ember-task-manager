import { module, test } from 'qunit';
import { setupTest } from 'task-manager/tests/helpers';

module('Unit | Route | tasks/task/edit', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:tasks/task/edit');
    assert.ok(route);
  });
});
