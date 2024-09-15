import { Singleton } from './singleton';
import { Logger } from './logger';

const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();
instance1.value = 10;
console.log(instance1.value);
console.log(instance2.value);
console.log(instance1 === instance2);

const logger1 = Logger.getInstance();
logger1.log("my first msg");

const logger2 = Logger.getInstance();
logger2.log("this is message 2");