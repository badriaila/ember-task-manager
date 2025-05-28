import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class LoginController extends Controller {

    @action
    async login(event){
        event.preventDefault();
        console.log(event.target.username.value);
        console.log(event.target.password.value);
    }

}
