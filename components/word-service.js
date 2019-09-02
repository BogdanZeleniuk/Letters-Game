class WordService{

	findWord(stringName, lettersArray) {

		let objWithWordAndLetters = {};
		let word = '';
		let lettersArrayCopy = lettersArray.slice();
		let stringNameAsArray = stringName.split('');

		outer: for (let i = 0; i < stringNameAsArray.length; i++) {
				for (let a = 0; a < lettersArrayCopy.length; a++) {
					if(stringNameAsArray[i] !== lettersArrayCopy[a] && 
						a < lettersArrayCopy.length-1){
						continue;
					} else if(stringNameAsArray[i] === lettersArrayCopy[a]) {
						word += lettersArrayCopy[a];
						lettersArrayCopy[a] = null;
						if(i === stringNameAsArray.length-1){
							objWithWordAndLetters.word = word;
							objWithWordAndLetters.lettersArray = lettersArrayCopy;
						}
						break;
					}
					else{
						objWithWordAndLetters.word = undefined;
						objWithWordAndLetters.lettersArray = lettersArray;
						console.log('can not find word ' + "*" + stringName + "*");
						break outer;
					}
				}
		}
	return objWithWordAndLetters;
	}

	checkWordAndAdd(word, array) {
		if (word !== undefined) {
			array.push(word);
		}
		return;
	}
}
module.exports = WordService;