import {ShapeProperties} from './shape-properties';

export abstract class Shape {
    constructor(public properties: ShapeProperties) {}

    abstract clone(): Shape;
}