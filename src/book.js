function createTitle(bookIdea, bookIdea2, bookIdea3) {
  return newTitle = `The ${bookIdea}`;
         newTitle2 = `The ${bookIdea2}`;
         newTitle3 = `The ${bookIdea3}`;

}
function buildMainCharacter(name, age, pronouns) {
 return {
  name: name,
  age: age,
  pronouns: pronouns,
}
}
function saveReview(reviewString, array) {
//  if (array.includes(reviewString)) {    //my answer, mentor ran through this with me
//    console.log(reviewString);          //I was having trouble understanding
//  } else {                              //what the test was asking, we practiced
//    return array.push(reviewString);  //reading unit tests and MDN docs on array prototypes
//  }
if (array.includes(reviewString) ===false) { //mentors refactored function
  return array.push(reviewString);          //.push adds strings to an array
}                                           //.includes returns true/false, determines if array
}                                           //includes a value(reviewString)
function calculatePageCount(bookTitle, bookPageCount) {
return bookTitle.length * 20;  //use .length to count characters in bookTitle variable
}
function writeBook(title, character, bookType) {
  return {
  title: title,
  mainCharacter: character,
  pageCount: calculatePageCount(title), //recognized 340 from calculatePageCount isFunction
                                        //initially had a number here but added previously created
                                        //function to make this dynamic & added title parameter to reference different book titles
  genre: bookType,   //initially had a string here, but changed to a parameter
}                    // value so it could pass as a different book object
}
function editBook(book) {
  return book.pageCount = book.pageCount * 0.75 //used dot notation to access writeBook function pageCount key value pair
}                                               // parameter book can be any book
module.exports = {
  createTitle,function () {
    var bookTitle = createTitle("Teenage Ghoul");
    var bookPageCount = calculatePageCount(bookTitle);

    assert.equal(bookPageCount, 340);
  });
  saveReview,
  calculatePageCount,
  writeBook,
  editBook
}
