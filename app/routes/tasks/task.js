import Route from '@ember/routing/route';

export default class TasksTaskRoute extends Route {
    model(params) {
        return fetch(`/api/tasks/${params.task_id}`)
            .then((res) => res.json())
            .then(json => {
                console.log('Task data fetched:', json);
                return json.data;
            });
        }
}
