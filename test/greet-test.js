var greet = require('../greet.js').greet;
var goodbye = require('../greet.js').goodbye;
var expect = require('chai').expect;

describe('greet.js', function() {
  it('will say Hello, Susie! when passed Susie', function() {
    expect(greet('Susie')).eql('Hello, Susie!');
  });

  it('will say Goodbye, Susie! when passed Susie', function() {
    expect(goodbye('Susie')).eql('Goodbye, Susie!');
  });
});
