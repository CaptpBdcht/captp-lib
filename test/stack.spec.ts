import { expect } from 'chai';

import { Stack } from '../src/stack';

describe('Stack', () => {

    it('can be initialized without an initializer', () => {
        const s = new Stack<number>();
        expect(s.size()).to.equal(0);
    });
});