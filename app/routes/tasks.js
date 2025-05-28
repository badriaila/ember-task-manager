import Route from '@ember/routing/route';

export default class TasksRoute extends Route {

    queryParams = {
        refresh: {
            refreshModel: true
        }
    }

    async model(){
        const response = await fetch('/api/tasks');
        const json = await response.json();

        const data = json.data.map((entry) => ({
            id: entry.id,
            ...entry.attributes
        }));

        console.log('data', data);
        return data;
    }
}
