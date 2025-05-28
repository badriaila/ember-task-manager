import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';


export default class TasksNewController extends Controller {
    @service router;
  title = '';
  description = '';
  status = 'pending';

  @action
  updateTitle(event) {
    this.title = event.target.value;
    console.log(this.title);
  }

  @action
  updateDescription(event) {
    this.description = event.target.value;
    console.log(this.description);
  }

  @action
  updateStatus(event) {
    this.status = event.target.value;
  }

  @action
  async addNewTask(event) {

    event.preventDefault();

    const newTask = {
      title: this.title,
      description: this.description,
      status: this.status
    };

    await fetch('/api/tasks', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ task: newTask })
    });
    this.router.transitionTo('tasks', {
        queryParams: {
            refresh: Date.now()
        }
    });

    console.log('newTask', newTask);
  }
}