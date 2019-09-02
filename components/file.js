const fs = require('fs');

class File{

	readLettersFromFile(fileName){
		return new Promise((resolve, reject) => {
			fs.readFile(fileName, (err, data) => {
				if(err) {
					reject(err);
				}  else {
					resolve(data);
				} 
			});	
		});
	}

	readWordsFromFile(fileName){
		return new Promise((resolve, reject) => {
			fs.readFile(fileName, (err, data) => {
				if(err) {
					reject(err);
				}  else {
					resolve(data);
				} 
			});	
		});
	}

	writeResult(fileName, result) {
		fs.writeFile(fileName, result, function(err) {
	    if(err) {
	        return console.log(err);
	    }
	    console.log("The file was saved!");
		}); 
	}
}
module.exports = File;