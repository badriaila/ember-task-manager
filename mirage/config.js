import {
  discoverEmberDataModels,
  // applyEmberDataSerializers,
} from 'ember-cli-mirage';
import { createServer } from 'miragejs';

export default function (config) {
  let finalConfig = {
    ...config,
    // Remove discoverEmberDataModels if you do not want ember-cli-mirage to auto discover the ember models
    models: {
      ...discoverEmberDataModels(config.store),
      ...config.models
    },
    // uncomment to opt into ember-cli-mirage to auto discover ember serializers
    // serializers: applyEmberDataSerializers(config.serializers),
    routes,
  };

  return createServer(finalConfig);
}

function routes() {

  this.namespace = '/api'; // Use this namespace for all routes

  this.get("/tasks", (schema) => {
    return schema.tasks.all();
  });

  this.get("/tasks/:id", (schema, request) => {
    let id = request.params.id;
    return schema.tasks.find(id);
  });

  this.post("/tasks", (schema, request) => {
    let attrs = JSON.parse(request.requestBody).task;
    console.log('attrs', attrs);
    return schema.tasks.create(attrs);
  });

  this.put("/tasks/:id", (schema, request) => {
    let id = request.params.id;
    let attrs = JSON.parse(request.requestBody).task;
    console.log('attrs', attrs);
    let task = schema.tasks.find(id);
    return task.update(attrs);
  }
  );

  this.del("/tasks/:id", (schema, request) => {
    let id = request.params.id;
    let task = schema.tasks.find(id);
    return task.destroy();
  }
  );

  



  // These comments are here to help you get started. Feel free to delete them.

  /*
    Config (with defaults).

    Note: these only affect routes defined *after* them!
  */

  // this.urlPrefix = '';    // make this `http://localhost:8080`, for example, if your API is on a different server
  // this.namespace = '';    // make this `/api`, for example, if your API is namespaced
  // this.timing = 400;      // delay for each request, automatically set to 0 during testing

  /*
    Shorthand cheatsheet:

    this.get('/posts');
    this.post('/posts');
    this.get('/posts/:id');
    this.put('/posts/:id'); // or this.patch
    this.del('/posts/:id');

    https://miragejs.com/docs/getting-started/overview/
  */
}
