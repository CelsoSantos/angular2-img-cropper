export interface IPoint {
    x: number;
    y: number;
    next: Point;
    prev: Point;
}

export class Point implements IPoint {

    public x: number;
    public y: number;

    public _next: Point;
    public _prev: Point;

    constructor(x?: number, y?: number) {
        this.x = x;
        this.y = y;
    }

    public get next(): Point {
        return this._next;
    }

    public set next(p: Point) {
        this._next = p;
    }

    public get prev(): Point {
        return this._prev;
    }

    public set prev(p: Point) {
        this._prev = p;
    }
}
