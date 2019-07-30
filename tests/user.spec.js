var assert = require('assert');
var should = require('chai').should();

describe('User', function(){
  it('should have property name', function(){
    var user = {name:'Firstname Lastname'}

    user.should.have.property('name');
  });
});