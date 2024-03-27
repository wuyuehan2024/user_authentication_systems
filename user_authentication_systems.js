import { axiosConfig } from '@user_authentication_systems/proxy';
import { sleep } from '@user_authentication_systems/sleep';

// user_authentication_system.js

class User {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    authenticate(username, password) {
        return this.username === username && this.password === password;
    }
}

// Example usage
const user = new User('Alice', '123456');
console.log(user.authenticate('Alice', '123456')); // true
console.log(user.authenticate('Bob', 'password')); // false
