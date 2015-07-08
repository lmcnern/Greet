'use strict';

var greet = require('../greet.js').greet;
var goodbye = require('../greet.js').goodbye;
var expect = require('chai').expect;

describe('greet.js', function() {
  it('will say Hello, Susie! when passed Susie', function() {
    expect(greet('Susie')).to.eql('Hello, Susie!');
  });

  it('will say Goodbye, Susie! when passed Susie', function() {
    expect(goodbye('Susie')).to.eql('Goodbye, Susie!');
  });

  it('will say Hello, Lauren! when passed Lauren', function() {
    expect(greet('Lauren')).to.eql('Hello, Lauren!');
  });

  it('will say Goodbye, Lauren! when passed Lauren', function() {
    expect(goodbye('Lauren')).to.eql('Goodbye, Lauren!');
  });

  it('will say Hello, Nyan! when passed Nyan', function() {
    expect(greet('Nyan')).to.eql('Hello, Nyan!');
  });

  it('will say Goodbye, Nyan! when passed Nyan', function() {
    expect(goodbye('Nyan')).to.eql('Goodbye, Nyan!');
  });

});
