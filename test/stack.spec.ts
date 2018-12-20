import { expect } from 'chai';
import { Stack } from '../src/stack';

describe('Stack', () => {

    it('can be initialized without an initializer', () => {
        const s = new Stack<number>();
        expect(s.size()).to.equal(0);
    });

    it('can be initialized with an initializer', () => {
        const initializer = [ 1, 3, 5, 7 ];
        const s = new Stack<number>(initializer);
        expect(s.size()).to.equal(initializer.length);
    });

    it('#isEmpty returns true when empty', () => {
        const s = new Stack<number>();
        expect(s.isEmpty()).to.be.true;
    });

    it('#isEmpty returns false when not empty', () => {
        const s = new Stack<number>([ 42 ]);
        expect(s.isEmpty()).to.be.false;
    });

    it('can be peeked', () => {
        const s = new Stack<number>([ 42 ]);
        expect(s.peek()).to.equal(42);
        expect(s.size()).to.equal(1);
    });

    it('cannot peek when empty', () => {
        const s = new Stack<number>();
        expect(s.peek()).to.be.undefined;
    });

    it('can be popped', () => {
        const s = new Stack<number>([ 21, 42 ]);
        expect(s.pop()).to.equal(42);
        expect(s.size()).to.equal(1);
    });

    it('cannot be popped when empty', () => {
        const s = new Stack<number>();
        expect(s.pop()).to.be.undefined;
    });

    it('can be pushed upon', () => {
        const s = new Stack<number>();
        s.push(21);
        expect(s.size()).to.equal(1);
        expect(s.peek()).to.equal(21);
        s.push(42);
        expect(s.size()).to.equal(2);
        expect(s.peek()).to.equal(42);
    });
});