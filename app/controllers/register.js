import Controller from '@ember/controller';
import { action } from '@ember/object';
import { service } from '@ember/service';
import { tracked } from '@glimmer/tracking';

export default class RegisterController extends Controller {

    @service router;
    @tracked username = '';
    @tracked password = '';
    @tracked email = '';
    @tracked usernameError = null;
    @tracked passwordError = null;
    @tracked emailError = null;

    @action
    updateUsername(event) {
        this.username = event.target.value.trimStart();
        if (this.username === '') {
            this.usernameError = 'Username is required';
        } else if (this.username.length < 6) {
            this.usernameError = 'Username must be at least 6 characters long';
        } else {
            this.usernameError = null;
        }
    }

    @action
    updatePassword(event) {
        this.password = event.target.value.trimStart();
        var regularExpression  = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
        if (this.password === '') {
            this.passwordError = 'Password is required';
        } else if (this.password.length < 8) {
            this.passwordError = 'Password must be at least 8 characters long';
        } else if (!regularExpression.test(this.password)) {
            this.passwordError = 'Password must be alphanumeric and can include special characters !@#$%^&*';
        } else {
            this.passwordError = null;
        }
    }

    @action
    updateEmail(event) {
        this.email = event.target.value.trimStart();
        var regularExpression = /\S+@\S+\.\S+/;
        if (this.email === '') {
            this.emailError = 'Email is required';
        } else if (!regularExpression.test(this.email)) {
            this.emailError = 'Email must be a valid email address';
        } else {
            this.emailError = null;
        }
    }

    @action
    async register(event){
        event.preventDefault();

        if (this.usernameError || this.passwordError || this.emailError) {
            console.error('Validation errors:', this.usernameError, this.passwordError, this.emailError);
            return;
        }

        const newUser = {
            username: this.username,
            password: this.password,
            email: this.email
        };

        try {
            // Simulate a registration API call
            console.log('Registering user:', newUser);
            // Reset fields after successful registration
            this.username = '';
            this.password = '';
            this.email = '';
            this.router.transitionTo('login'); // Redirect to login page after registration
        } catch (error) {
            console.error('Registration failed:', error);
        }
    }
}
