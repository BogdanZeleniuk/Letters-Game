const File = require('./components/file');
const WordService = require('./components/word-service');

const file = new File();
const wordService = new WordService();

const aLettersFilePath = './files/a_letters.txt';
const aWordsFilePath = './files/a_words.txt';
const aResultPath = './files/a_result.txt';

let aLettersArray = [];
let aWordsArray = [];

class Main{

	async createWordFromLetters() {

		await file.readLettersFromFile(aLettersFilePath)
				.then((data) => {
					aLettersArray = data.toString();
				})
				.catch((err) => console.log(err));

		await file.readWordsFromFile(aWordsFilePath)
				.then((data) => {
					aWordsArray = data.toString();
				})
				.catch((err) => console.log(err));

		let parsedLettersArray = aLettersArray.split(/\r?\n/g);		
		let parsedWordsArray = aWordsArray.split(/\r?\n/g);

		let newLettersArray = '';
		let word = '';
		let resultArray = [];

		for (let i = 0; i < parsedWordsArray.length; i++) {
			
			if (i === 0) {
				let result = wordService.findWord(parsedWordsArray[i], parsedLettersArray);
				newLettersArray = result.lettersArray;
				word = result.word;
			} else {
				let result = wordService.findWord(parsedWordsArray[i], newLettersArray);
				newLettersArray = result.lettersArray;
				word = result.word;
			}
				wordService.checkWordAndAdd(word, resultArray);
		}

		console.log('My score is ' + ((resultArray.toString().length)-(resultArray.length-1)));
		file.writeResult(aResultPath, resultArray.join('\r\n'));	
	}
}

new Main().createWordFromLetters();