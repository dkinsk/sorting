describe('Merge sort', function(){
	it('handles an empty array', function(){
		expect( mergeSort([]) ).toEqual([]);
	});
    
    it('sorts the array', function(){
		expect( mergeSort([4,2,6,7,8]) ).toEqual([2,4,6,7,8]);
	});

});