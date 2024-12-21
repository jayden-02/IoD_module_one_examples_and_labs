const book1 = {
    "title" : "The Three Little Pigs",
    "description" : "'The Three Little Pigs' is a fable about three pigs who build their houses of different materials. A Big Bad Wolf blows down the first two pigs' houses which are made of straw and sticks respectively, but is unable to destroy the third pig's house that is made of bricks.",
    "author" : "James Halliwell-Phillipps",
    "number_of_pages" : 20,
}
// console.log(user["last_name"]);
console.log(book1.title);
console.log(book1.description);
console.log(book1.author);
console.log(book1.number_of_pages);
console.log(book1);

book1.description = 'The story of The Three Little Pigs is a traditional folk tale that has been passed down orally through generations.'

console.log(book1.description);

const library = []
library.push(book1)
console.log(library)

library.push({"title" : "second book",
"description" : "something cool",
"author" : "not me",
})

console.log(library)

const book2 = {
    "title" : "The Very Hungry Caterpillar",
    "description" : "The Very Hungry Caterpillar is a 1969 children's picture book designed, illustrated, and written by American children's author and illustrator Eric Carle. The plot follows a very hungry caterpillar that consumes a variety of foods before pupating and becoming a butterfly.",
    "author" : "Eric Carle",
    "number_of_pages" : 22,
}

library.push(book2)
