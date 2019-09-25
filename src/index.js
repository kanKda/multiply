module.exports = function multiply(first, second) {
	var first = first.split('').reverse();
	var second = second.split('').reverse();

	var numArr = [];

	for (var i = 0; i < first.length; i++) {
		for (var j = 0; j < second.length; j++) {
		var mult = first[i] * second[j];
			if (numArr[i + j]) {
			numArr[i + j] += mult;
			} else {
			numArr[i + j] = mult;
			}
		}
	}

	for (var i = 0; i < numArr.length; i++) {
	var num = numArr[i] % 10;
    var shift = Math.floor(numArr[i] / 10);
    numArr[i] = num;
    if (numArr[i + 1])
      numArr[i + 1] += shift;
    else if (shift != 0)
      numArr[i + 1] = shift;
  	}


	return numArr.reverse().join('');
}
