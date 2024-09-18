import {Rectangle} from './rectangle';

const rectangle = new Rectangle({
    color: "blue",
    x: 40,
    y: 30
}, 300, 400);

const anotherRectangle = rectangle.clone();
anotherRectangle.properties.color = "green";