var test = require('tape');
var helper = require('./helper');

test('element has certain class', function(t){

  t.plan(1);

  var testDiv = helper.createDOMwithTestNode()
    .classed('new-class', true);
  
  t.ok(testDiv.hasClass('new-class'));
});

test('element does not have certain class', function(t){

  t.plan(1);

  var testDiv = helper.createDOMwithTestNode();
  
  t.notOk(testDiv.hasClass('not-existing-class'));
});