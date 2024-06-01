const videoData = [
  {
    name: "Miss Scarlet",
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      "dining room": false,
      "billiard room": false,
      library: false,
    },
  },
  {
    name: "Rusty",
    present: false,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      "dining room": false,
      "billiard room": false,
      library: false,
    },
  },
  {
    name: "Colonel Mustard",
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      "dining room": false,
      "billiard room": false,
      library: false,
    },
  },
  {
    name: "Professor Plum",
    present: true,
    rooms: {
      kitchen: false,
      ballroom: false,
      conservatory: false,
      "dining room": false,
      "billiard room": false,
      library: false,
    },
  },
];

let arrayFilter = videoData.filter(function (el) {
  return el.present == true;
});

let trueCount = 0;

for (present in arrayFilter) {
  trueCount += 1;
}

console.log("Jumlah Present True ada " + trueCount);
console.log(arrayFilter);

// Leon Jonathan Farrell, Homework 1
