import {Shape} from './shape';
import {ShapeProperties} from './shape-properties';

export class Rectangle extends Shape {
    constructor(public properties: ShapeProperties,
                public width: number,
                public height: number) {
        super(properties);
    }

    clone(): Shape {
        return new Rectangle({...this.properties}, this.width, this.height);
    }
}