import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';

export default class TasksTaskEditController extends Controller {


    @service router;

    title = '';
    description = '';
    status = 'pending';
    
    @action
    updateTitle(event) {
        this.title = event.target.value;
        console.log(this.title);
        // console.log(this.model);
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
    async editTask(event){
        event.preventDefault();

        const updatedTask = {
            title: this.title,
            description: this.description,
            status: this.status
        };

        await fetch(`/api/tasks/${this.model.id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ task: updatedTask })
        });

        this.router.transitionTo('tasks', {
            queryParams: {
                refresh: Date.now()
            }
        });

        console.log('updatedTask', updatedTask);
    }

    @action
    async deleteTask(event) {
        event.preventDefault();

        await fetch(`/api/tasks/${this.model.id}`, {
            method: 'DELETE'
        });

        this.router.transitionTo('tasks', {
            queryParams: {
                refresh: Date.now()
            }
        });

        console.log('Task deleted');
    }



}
