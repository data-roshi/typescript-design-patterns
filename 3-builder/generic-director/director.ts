import {Builder} from './builder';

export class Director {
    private builder!: Builder;

    public setBuilder(builder: Builder): void {
        this.builder = builder;
    }

    public buildMinimumProduct(): void {
        this.builder.setPartA();
    }

    public buildFullProduct(): void {
        this.builder.setPartA();
        this.builder.setPartB();
        this.builder.setPartC();
    }
}