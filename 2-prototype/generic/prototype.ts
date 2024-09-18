import {UserDetails} from './user-details';

export interface Prototype {
    clone(): Prototype;
    getUserDetails(): UserDetails;
}