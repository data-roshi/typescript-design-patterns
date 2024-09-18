import {Shape} from './shape';
import {ShapeProperties} from './shape-properties';

export class Circle extends Shape {
    constructor(properties: ShapeProperties,
                public radius: number) {
        super(properties);
    }

    clone(): Shape {
        return new Circle({...this.properties}, this.radius);
    }
}