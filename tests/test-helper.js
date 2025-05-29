import Application from 'task-manager/app';
import config from 'task-manager/config/environment';
import * as QUnit from 'qunit';
import { setApplication } from '@ember/test-helpers';
import { setup } from 'qunit-dom';
import { loadTests } from 'ember-qunit/test-loader';
import { start, setupEmberOnerrorValidation } from 'ember-qunit';


// import startMirage from 'ember-cli-mirage/test-support';

// if (config.environment === 'test') {
//   startMirage();
// }



setApplication(Application.create(config.APP));

setup(QUnit.assert);
setupEmberOnerrorValidation();
loadTests();
start();
