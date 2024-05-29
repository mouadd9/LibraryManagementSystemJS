# Library Management System

## Project Overview

This Library Management System is designed to modernize the management of media items at a local library. Utilizing object-oriented programming in JavaScript, the system manages various types of media such as books, CDs, and movies. It provides functionalities like checking in/out items, adding ratings, and searching media by title.

## Features

- **Media Management**: Supports management of different types of media including books, CDs, and movies.
- **Check In/Out System**: Enables users to toggle the check-out status of any media item.
- **Rating System**: Allows users to add ratings to media items and calculate their average ratings.
- **Search Functionality**: Provides the ability to search for media items by title within the library's catalog.
- **Dynamic Media Addition**: Facilitates the dynamic addition of new media items to the library catalog.
- **Shuffle Albums**: Offers the functionality for CDs to shuffle songs, providing a random play order.

## Classes Structure

### Media (Parent Class)
- **Properties**: Title, Check-Out Status, Ratings
- **Methods**: Add Rating, Get Average Rating, Toggle Check-Out Status

### Book (Subclass of Media)
- **Additional Properties**: Author, Pages

### Movie (Subclass of Media)
- **Additional Properties**: Director, Runtime, Movie Cast

### CD (Subclass of Media)
- **Additional Properties**: Artist, Songs

### Catalog
- **Methods**: Manages the collection of all media items, adds media items, searches by title

## Setup and Running

### Prerequisites

- Node.js installed on your computer.
- A modern web browser that supports JavaScript for browser-based testing.

### Setup

1. Clone the repository or download the source code.
2. Open the project in a code editor like Visual Studio Code.

### Running

1. **Using Node.js**:
   - Navigate to the project directory in your terminal.
   - Run `node yourScriptName.js` to execute a script.

2. **In a Browser**:
   - Open the JavaScript console in your browser.
   - Copy and paste your JavaScript code into the console and press Enter to run it.

## Usage Examples

```javascript
// Testing the Book Class
let book1 = new Book('Death', 'Mouad', 120);
console.log('Book title: ' + book1.title);
console.log('Author: ' + book1.author);
console.log('Number of pages: ' + book1.pages);
book1.toggleCheckOutStatus();
console.log('Book current status (should be true): ' + book1.checkedOutStatus);
book1.addRating(5);
book1.addRating(4);
book1.addRating(3);
console.log('Book average rating: ' + book1.getAverageRating());

// Testing the Movie Class
let movie1 = new Movie('12 years a slave', 'George', 120);
console.log('Movie director: ' + movie1.director);
console.log('Movie title: ' + movie1.title);
console.log('Movie runtime: ' + movie1.runtime + ' mins');
movie1.addActorToCast('Aya');
movie1.addActorToCast('Sarah');
movie1.addActorToCast('Mohammed');
console.log('Movie cast: ' + movie1.movieCast.join(', '));
movie1.addRating(10);
movie1.addRating(8);
movie1.addRating(9.5);
console.log('Movie average rating: ' + movie1.getAverageRating());
movie1.toggleCheckOutStatus();
console.log('Movie current status (after toggle): ' + movie1.checkedOutStatus);
