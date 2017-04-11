import test from '../src/test';
import { expect } from 'chai';

describe('Test', () =>{
	it('test', () =>{
		expect(test()).to.equal('Hello moto');
	})
});