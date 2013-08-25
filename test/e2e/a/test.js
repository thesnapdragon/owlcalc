'use strict';

describe('Controller: MainCtrl', function() {

beforeEach(function() {
    browser().navigateTo('/index.html');
});

it('initial help shows', function() {
    expect(element('.help:visible').count()).toBe(1);
});

it('can calculate equations', function() {
    input('newline').enter('1+1');
    element('.newlinesubmit').click();
    // equation + solution = 2
    expect(repeater('.history p').count()).toEqual(2);
    // after calculation input field is empty
    expect(input('newline').val()).toEqual('');
    // help disappears
    expect(element('.help:visible').count()).toBe(0);
});

it('typed text can be deleted', function() {
    input('newline').enter('1+1');
    element(':reset').click();
    sleep(1);
    expect(input('newline').val()).toEqual('');
});

it('calculations are fine', function() {
    input('newline').enter('1+1');
    element('.newlinesubmit').click();
    expect(element(".history p:nth-child(2)").text()).toEqual("2");
    // after calculation input field is empty
    expect(input('newline').val()).toEqual('');
});

it('can delete history', function() {
    input('newline').enter('1+1');
    element('.newlinesubmit').click();
    element('.icon-delete').click();
    // after delete history is empty
    expect(repeater('.history p').count()).toEqual(0);
    expect(input('newline').val()).toEqual('');
});

});
