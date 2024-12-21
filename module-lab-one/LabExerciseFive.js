// create array
const animals = [
    'frog',
    'sheep',
    'horse',
    'lion',
    'elephant',
];

//replace position 1 and 4

animals[0] = "dog"
animals[3] = "zebra"

//Add new element at start
animals.unshift('giraffe')
console.log(animals)

//Remove element at the end of array
animals.pop()
console.log(animals)