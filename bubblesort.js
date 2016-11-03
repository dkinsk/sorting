function swap(current, next){
	return current > next;
}

function bubbleSort(array){
	let swapped = false;
	let count = 0;
	let current, next;

	while(!swapped){
		swapped = true;
		for(let i = 0; i < array.length - 1; i++){
			current = array[i];
			next = array[i + 1];
			if(swap(current, next)){
				array[i] = next;
				array[i + 1] = current;					
				count++;
			    swapped = false;
			}
		}
	}
	console.log(count);
	return array;
}
