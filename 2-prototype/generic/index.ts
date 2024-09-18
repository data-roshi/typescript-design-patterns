import {ConcretePrototype} from './concrete-prototype';

const user1 = new ConcretePrototype({
    name: "John",
    age: 32,
    email: "blah@gmail.com"
});

const user2= user1.clone();
console.log(user1 !== user2);
