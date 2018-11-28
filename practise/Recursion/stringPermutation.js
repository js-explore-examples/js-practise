function stringPermutation(str, select) {
	const permutations = [];
	const recursivePermutation = (str, s, index, k) => {
		if (index === k) {
			permutations.push(s);
			return;
		}
		for (let it = index; it < str.length; it++) {
			let res = s + str[it];
			recursivePermutation(str, s, index + 1, k);
		}
	}

	const swapString = (str, ind1, ind2) => {
		let arrStr = str.split('');
		const temp = arrStr[ind1];
		arrStr[ind1] = arrStr[ind2];
		arrStr[ind2] = temp;
		return arrStr.join('');
	}

	recursivePermutation(str, '', 0, select);

	return permutations;
}



var res = stringPermutation('abc', 3);
a.arrStr
console.log(res, res.length);
res = stringPermutation('abc', 2);
console.log(res, res.length);
res = stringPermutation('abc', 1);
console.log(res, res.length);
// 'abc'
/* 
	permutation : arrangement : 5! = 120 ;
	5*4*3*2*1 = 120

	3: a , b ,c => 6
	a  b c
	a c b
	b a c
	b 
   combination : 5 balls in basket , 2 ball can be selected 
*/
