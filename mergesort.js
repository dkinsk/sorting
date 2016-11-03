function mergeSort(array){
	if(array.length < 2){
		return array;
	}

	let mid = parseInt(array.length/2);
	let left = array.slice(0, mid);
	let right = array.slice(mid);

	return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right){
	let out = [];
	while(left.length && right.length){
		if(left[0] < right[0]){
			out.push(left.shift());
		} else {
			out.push(right.shift());
		}
	}
	while(left.length){
		out.push(left.shift());
	}
	while(right.length){
		out.push(right.shift());
	}
	return out;
}