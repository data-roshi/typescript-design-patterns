import {Prototype} from './prototype';
import {UserDetails} from './user-details';

export class ConcretePrototype implements Prototype {
    constructor(private user: UserDetails) {}

    clone(): Prototype {
        const clone = Object.create(this);
        clone.user = { ...this.user }
        return clone;
    }

    getUserDetails(): UserDetails {
        return this.user;
    }
}