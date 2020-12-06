function shelfBook(object, array) {  //mirror shelfBook arguments
if (array.length <= 2) {          //we can keep adding books to the shelf
return array.unshift(object);     //as long as the array length is 3 elements or less
}                                 // 2 represents the index of a 3rd position
}                               //"so long as the length of the array is 3 or less elements, keep running the return statement"

function unshelfBook(object, array) {
return array.splice(1,1);  // splice method removes an array element a specified position
}                          // test was asking for "dune" to be removed which
                            //was at index position 1 in the array
function listTitles(fantasyShelf) {  //was stuck on this and talked through it with a classmate
  var array = [];                   //needed to store my fantacyShelf[i].title elements
for (var i = 0; i < fantasyShelf.length; i++){
  array.push(fantasyShelf[i].title);
}
return(array.join(', '));                     //return will stop a function
}

//function searchShelf(sciFiShelf, title) {
//  if (sciFiShelf[1].title == "Hyperion") {
//return (true);     //think of return as equals
//} else {
//console.log (false);
//return (sciFiShelf);                    **was trying to see if I could get
//}                                       **answer without a loop itteration
//}

function searchShelf(sciFiShelf, titleString) {
for (var i = 0; i < sciFiShelf.length; i++){
      if (sciFiShelf[i].title === titleString) {
        return (true);
      } else {
        return (false);                      //error message tells me that my
      }                                    //code is returning false when it should be true
}
}
module.exports = {
  shelfBook,
  unshelfBook,
 listTitles,
  searchShelf
};
