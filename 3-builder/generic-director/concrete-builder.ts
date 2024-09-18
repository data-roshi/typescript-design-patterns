import {Builder} from './builder';
import {Product} from './product';

export class ConcreteBuilder implements Builder {
    private product!: Product;

    constructor() {
        this.reset();
    }

    public reset(): void {
        this.product = new Product();
    }

    public getProduct(): Product {
        const result = this.product;
        this.reset();
        return result;
    }

    setPartA(): void {
        this.product.add("partA");
    }

    setPartB(): void {
        this.product.add("partB");
    }

    setPartC(): void {
        this.product.add("partC");
    }
}