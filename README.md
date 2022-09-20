### About
A minimally-designed application demonstrating the use of Express middlewares and EJS. Users are able to create movies by inputting form data, re: title, release year, MPAA rating, and Now Showing status. Users can also create reviews for each movie which are embedded into the Movies schema, sharing a one-to-many relationship. 

RESTful APIs are implemented to create, update, or delete Movies, Reviews, or Performers. Building this app demonstrates best practices using Express MVC architecture to modularize functions into routes, controllers, and models and client-side scripting into views. This app also leverages Mongoose's library to drive middleware functions. 

After the creation of a Movie, users can create reviews for a movie or add performers to the Movie's cast. Reviews will be rendered in the Movie Detail page, which is navigated from the Movie List Page. 

### Installation
1. Clone the repo
2. <code>npm i</code> to install packages and dependencies
3. <code>nodemon</code> to run the server
4. Enter localhost:<your_port> into your browser


### Technologies
- MongoDB
- Express
- Mongoose 
- JavaScript
- EJS
- CSS

### Credits

This application was created through a module within General Assembly's Software Immersion program.

Completed Oct 2022