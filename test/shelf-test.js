var assert = require("chai").assert;

var {
  shelfBook,
  unshelfBook,
  listTitles,
  searchShelf
} = require("../src/shelf.js")

describe("shelf.js", function() {
  describe("shelfBook", function() {
    it("should be a function", function() {
      assert.isFunction(shelfBook);
    });

    it("should add books to a specific shelf", function() {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var sciFiShelf = [];

      shelfBook(hyperion, sciFiShelf); //
      shelfBook(dune, sciFiShelf);

      assert.equal(sciFiShelf[0], dune); //what is being tested for
      assert.equal(sciFiShelf[1], hyperion);
    });

    it("should add another book to the shelf", function() {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var endersGame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "sciFi"
      };
      var sciFiShelf = [hyperion];

      shelfBook(endersGame, sciFiShelf);
      shelfBook(dune, sciFiShelf);

      assert.equal(sciFiShelf[0], dune);
      assert.equal(sciFiShelf[1], endersGame);
      assert.equal(sciFiShelf[2], hyperion);
    });

    it("shelves can only hold a certain amount of books", function () {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var endersGame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "sciFi"
      };
      var caseysBook = {
        title: "The Robot Kitty",
        mainCharacter: { name: "Coda", age: 15, pronouns: "he/him" },
        pageCount: 201,
        genre: "sciFi"
      };
      var sciFiShelf = [hyperion, dune];

      shelfBook(endersGame, sciFiShelf); //function shelfBook is passing 2 arguments
                                         // object enderGame and sciFiShelf array

      assert.equal(sciFiShelf.length, 3);  //testing for the length of the array to have 3 elements
      assert.deepEqual(sciFiShelf, [endersGame, hyperion, dune]); //testing for objects endersGame, hyperion, dune to be added to array

      shelfBook(caseysBook, sciFiShelf); //function shelfBook is passing 2 arguements
                                         // caseysBook object and sciFiShelf array
      assert.equal(sciFiShelf.length, 3); //same as above test
      assert.deepEqual(sciFiShelf, [endersGame, hyperion, dune]); //same as above test
    });
  });

  describe("unshelfBook", function() {
    it("should be a function", function() {
      assert.isFunction(unshelfBook);
    });

    it("should remove a book by name", function() {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var endersGame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "sciFi"
      };
      var sciFiShelf = [hyperion, dune, endersGame];

      unshelfBook("Dune", sciFiShelf); //unshelfBook is passing two arguments
                                      //the string "Dune" which is a book title in object dune
      assert.equal(sciFiShelf.length, 2); //testing the length of the array is 2 elements
      assert.deepEqual(sciFiShelf, [hyperion, endersGame]); //testing the array has hyperion object and enderGame object within the array
    });                                                     //Dune object was removed
  });

  describe("listTitles", function () {
    it("should be a function", function () {
      assert.isFunction(listTitles);
    });

    it("should create a list of all the titles on a shelf", function () {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var endersGame = {
        title: "Ender's Game",
        mainCharacter: { name: "Andrew 'Ender' Wiggin", age: 10, pronouns: "he/him" },
        pageCount: 324,
        genre: "sciFi"
      };
      var fantasyShelf = [hyperion, dune, endersGame]; //variable fantasyShelf is assigned to the array of objects

      var titles = listTitles(fantasyShelf); //variable titles is assigned to the function listTitles with the argument of
                                              //fantasyShelf variable
      assert.deepEqual(titles, "Hyperion, Dune, Ender's Game"); //testing for the title variable to list the array object's key of title
    });
  });

  describe("searchShelf", function() {
    it("should tell us if a title is on the shelf", function() {
      var hyperion = {
        title: "Hyperion",
        mainCharacter: { name: "The Shrike", age: null, pronouns: "they" },
        pageCount: 482,
        genre: "sciFi"
      };
      var dune = {
        title: "Dune",
        mainCharacter: { name: "Paul", age: 15, pronouns: "he/him" },
        pageCount: 421,
        genre: "sciFi"
      };
      var sciFiShelf = [dune, hyperion];

      assert.equal(searchShelf(sciFiShelf, "Hyperion"), true);
      assert.equal(searchShelf(sciFiShelf, "The Fifth Season"), false);
    });
  });
});
