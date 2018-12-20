import { expect } from 'chai';
import { Strings } from '../src';

describe('Strings', () => {

    it('contains several useful methods', () => {
        expect(Object.keys(Strings).length).to.be.greaterThan(0);
        expect(Strings).to.have.property('capitalize');
    });

    describe('#capitalize', () => {

        it('should return empty when input is empty', () => {
            expect(Strings.capitalize('')).to.equal('');
        });

        it('should not change input when it begins with upper case letter', () => {
            expect(Strings.capitalize('A')).to.equal('A');
        });

        it('should not capitalize non-alphabetical first letter', () => {
            expect(Strings.capitalize(' a')).to.equal(' a');
            expect(Strings.capitalize('1a')).to.equal('1a');
            expect(Strings.capitalize('#a')).to.equal('#a');
        });

        it('should capitalize accented chars', () => {
            expect(Strings.capitalize('éa')).to.equal('Éa');
            expect(Strings.capitalize('èa')).to.equal('Èa');
            expect(Strings.capitalize('ça')).to.equal('Ça');
        });

        it('should capitalize only first word', () => {
            expect(Strings.capitalize('one two')).to.equal('One two');
            expect(Strings.capitalize('one Two')).to.equal('One Two');
        });
    });
});
