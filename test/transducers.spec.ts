import { expect } from 'chai';
import { Transducers } from '../src';

describe('Transducers should', () => {

    it('provide a map transducer', () => {
        const collection = [ 0, 1, 2 ];
        const plusOne = (value: number) => value + 1;
        const mapped = collection.reduce(
            Transducers.map(plusOne),
            0
        );

        expect(mapped).to.equal([ 1, 2, 3 ]);
    });
});
