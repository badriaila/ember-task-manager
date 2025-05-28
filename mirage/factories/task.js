import { Factory } from 'miragejs';
import { faker } from '@faker-js/faker';


export default Factory.extend({

    id(i) {
        return i + 1;
    },
    title() {
        return faker.lorem.sentence();
    },
    description() {
        return faker.lorem.paragraph();
    },
    status(){
        return faker.helpers.arrayElement(['pending', 'in-progress', 'completed']);
    }

});
