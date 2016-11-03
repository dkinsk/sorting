describe('Bubble Sort', function(){
	it('handles an empty array', function(){
		expect( bubbleSort([]) ).toEqual([]);
	});
    
    it('sorts the array', function(){
		expect( bubbleSort([4,2,6,7,8]) ).toEqual([2,4,6,7,8]);
	});

});

describe("A spy", function(){
	
	it("tracks the number of times it was called", function() {
    expect(swap.calls.count()).toEqual(0);

    swap();

    expect(swap.calls.count()).toEqual(1);
  });
});