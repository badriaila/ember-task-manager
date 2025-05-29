import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';


export default class LoginController extends Controller {

    @service router;

    @tracked loginError = null;


    @action
    async login(event){
        event.preventDefault();
        
        if (loginError){
            console.error('Validation errors:', this.error);
            return;
        }
    }

}
