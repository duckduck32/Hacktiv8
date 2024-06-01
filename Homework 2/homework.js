const arrayOfWords = ["cucumber", "tomatoes", "avocado"];
const complicatedArray = ["cucumber", 44, true];

function makeAllCaps(arrayOfWords) {
  return new Promise((resolve, reject) => {
    if (arrayOfWords.length === 0) {
      reject("arrayOfWords Kosong!");
    }
    const upperCaseWords = arrayOfWords
      // untuk ambil hanya string dari arrayOfWords
      .filter((word) => typeof word === "string")
      // map untuk convert isi arrayOfWords ke uppercase
      .map((word) => word.toUpperCase());
    resolve(upperCaseWords);
  });
}

function sortWords(arrayOfWords) {
  return new Promise((resolve, reject) => {
    if (arrayOfWords.length === 0) {
      reject("arrayOfWords Kosong!");
    }
    arrayOfWords.sort();
    resolve(arrayOfWords);
  });
}

makeAllCaps(arrayOfWords)
  .then(sortWords)
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

makeAllCaps(complicatedArray)
  .then((result) => {
    console.log(result[0]);
  })
  .catch((error) => {
    console.log(error);
  });

// Leon Jonathan Farrell, Homework 2
