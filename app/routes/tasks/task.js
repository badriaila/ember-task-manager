import Route from '@ember/routing/route';

export default class TasksTaskRoute extends Route {
    model(params) {
        return fetch(`/api/tasks/${params.task_id}`)
            .then((res) => res.json())
            .then((json) => ({
                id: json.data.id,
                ...json.data.attributes
            }));
        }
}
