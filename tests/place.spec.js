var assert = require('assert');
var should = require('chai').should();
var should = require('chai').expect;

describe('Place', function(){
  it('should have property name', function(){
    let place = {name:'Figo', Maker:'Ford'}

    place.should.have.property('name');
  });
});