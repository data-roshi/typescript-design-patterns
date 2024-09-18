import {ConcreteBuilder} from './concrete-builder';
import {Director} from './director';

const builder = new ConcreteBuilder();
const director = new Director();
director.setBuilder(builder);

director.buildMinimumProduct();
const minimum = builder.getProduct();
console.log(minimum);

director.buildFullProduct();
const full = builder.getProduct();
console.log(full);