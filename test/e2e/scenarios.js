'use strict';

/* http://docs.angularjs.org/guide/dev_guide.e2e-testing */

describe('PhoneCat App', function() {

  it('hello', function() {
    browser().navigateTo('../../index.html');
    expect(element("p").text()).toEqual("Hello");
  });

});
