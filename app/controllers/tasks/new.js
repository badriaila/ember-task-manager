import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class TasksNewController extends Controller {
  
  @service router;
  
  @tracked title = '';
  @tracked description = '';
  @tracked status = 'pending';

  @tracked titleError = null;
  @tracked descriptionError = null;

  @action
  updateTitle(event) {
    this.title = event.target.value.trimStart();
    console.log('title', this.title);
    if (this.title === '') {
      this.titleError = 'Title is required';
    } else if (this.title.length < 3) {
      this.titleError = 'Title must be at least 3 characters long';
    } else {
      this.titleError = null;
    }
  }

  @action
  updateDescription(event) {
    this.description = event.target.value.trimStart();
    console.log('description', this.description);
    if (this.description === '') {
      this.descriptionError = 'Description is required';
    } else if (this.description.length < 10) {
      this.descriptionError = 'Description must be at least 10 characters long';
    } else {
      this.descriptionError = null;
    }
  }

  @action
  updateStatus(event) {
    this.status = event.target.value;
    console.log('status', this.status);
  }

  @action
  async addNewTask(event) {

    event.preventDefault();

    if (this.titleError || this.descriptionError){
      return;
    }

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
      body: JSON.stringify({ data: newTask })
    });

    this.router.transitionTo('tasks', {
        queryParams: {
            refresh: Date.now()
        }
    });

    console.log('newTask', newTask);
  }
}