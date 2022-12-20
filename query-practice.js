require("./config/database"); // connect this script to the database
const Movie = require("./models/movie");
const Performer = require("./models/performer");

/*-- For each exercise below, write the code as described --*/

Promise.resolve()
  .then(function () {
    console.log("HERE");
    // 1) Find all movie docs
    return Movie.find({}); // remember to return the promise!
  })
  .then((result) => {
    console.log("1): ", result);
    return Performer.find({});
    // 2) Find all performer docs
  })
  .then((result) => {
    console.log("2): ", result);
    // 3) Find all movies with an MPAA Rating of 'PG'
    return Movie.find({ mpaaRating: "PG" });
  })
  .then((result) => {
    console.log("3): ", result);
    // 4) Find all movies that are still showing
    return Movie.find({ nowShowing: true });
  })
  .then((result) => {
    console.log("4): ", result);
    // 5) Find all movies with an MPAA Rating of 'PG' or 'PG-13'
    return Movie.where("mpaaRating").in(["PG-13", "PG"]);
  })
  .then((result) => {
    console.log("5): ", result);
    // 6) Find the first movie found with a releaseYear of 2018
    return Movie.findOne({ releaseYear: "2018" });
  })
  .then((result) => {
    console.log("6): ", result);
    // 7) Find all movies released after 1980
    return Movie.find({ releaseYear: { $gte: 1980 } });
  })
  .then((result) => {
    console.log("7): ", result);
    // 8) Find all movies whose titles start with a 'C'
    // Hint: StackOverflow will show how to use a regular expression
    return Movie.find({ title: /^C/g });
  })
  .then((result) => {
    console.log("8): ", result);
    // 9) Find the performer named 'Rami Malek'
    return Performer.findOne({ name: "Rami Malek" });
  })
  .then((result) => {
    console.log("9): ", result);
    // 10) Find all performers born before 1980
    return Performer.find({ born: { $lte: 1980 } });
  })
  .then((result) => {
    console.log("10): ", result);
    // 11) Find all performers whose name starts with a 'J'
    return Performer.find({ name: /^J/ });
  })
  .then((result) => {
    console.log("11): ", result);
    // 12) Add a reference to performer 'Bill Murray' to
    //     the movie Caddyshack's cast property and save.
    //     console.log the updated movie.
    let query = Movie.findOne({ title: "Caddyshack" });
    let update = Performer.findOne({ name: "Bill Murray" });
    // const options = { returnNewDocument: true };
    // return Movie.findOneAndUpdate(query, update, options).then(
    //   (updatedDocument) => {
    //     console.log("updated document: ", updatedDocument)
    //     if (updatedDocument) {
    //       console.log(`Update successful: ${updatedDocument}`);
    //       updatedDocument.save()
    //     } else {
    //       console.log("update unsuccessful");
    //     }
    //     return updatedDocument;
    //   }
    return Promise.all([query, update]);
  })
  // })
  .then((result) => {
    result[0].cast.push(result[1]);
    return result[0].save();
  })
  .then((result) => {
    console.log("12): ", result);
  })
  .then(function () {
    process.exit();
  });
