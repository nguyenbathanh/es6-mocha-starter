import {sum} from '../src/sample';
import {expect} from 'chai';

describe('Sample JS', () => {
  it('should add two numbers ', () => {
    expect(sum(3,5)).to.equal(8);
  });
});