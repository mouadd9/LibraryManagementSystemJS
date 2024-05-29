// Library Management System - This system handles books, CDs, and movies in a library setting.
// It includes functionality to check out media, add ratings, manage a catalog, and more.

// Parent class: Media
class Media {
   constructor(title) {
       this._title = title;
       this._isCheckedOut = false;
       this._ratings = [];
   }

   // Getters
   get title() {
       return this._title;
   }

   get checkedOutStatus() {
       return this._isCheckedOut;
   }

   get ratings() {
       return this._ratings;
   }

   // Methods
   addRating(rating) {
       if (rating >= 1 && rating <= 5) {
           this._ratings.push(rating);
       } else {
           console.error('Rating must be between 1 and 5.');
       }
   }

   getAverageRating() {
       const sum = this._ratings.reduce((acc, rating) => acc + rating, 0);
       return sum / this._ratings.length;
   }

   toggleCheckOutStatus() {
       this._isCheckedOut = !this._isCheckedOut;
       console.log(`Toggled to: ${this._isCheckedOut}`);
   }
}

// Book subclass
class Book extends Media {
   constructor(title, author, pages) {
       super(title);
       this._author = author;
       this._pages = pages;
   }

   // Getters
   get author() {
       return this._author;
   }

   get pages() {
       return this._pages;
   }
}

// Movie subclass
class Movie extends Media {
   constructor(title, director, runtime) {
       super(title);
       this._director = director;
       this._runtime = runtime;
       this._movieCast = [];
   }

   // Getters
   get director() {
       return this._director;
   }

   get runtime() {
       return this._runtime;
   }

   get movieCast() {
       return this._movieCast;
   }

   // Add actor to movie cast
   addActorToCast(actor) {
       if (!this._movieCast.includes(actor)) {
           this._movieCast.push(actor);
           console.log(`${actor} added successfully to the movie cast`);
       } else {
           console.log(`${actor} already exists in the movie cast`);
       }
   }
}

// CD subclass
class CD extends Media {
   constructor(title, artist) {
       super(title);
       this._artist = artist;
       this._albums = [];
   }

   // Getters
   get artist() {
       return this._artist;
   }

   get albums() {
       return this._albums;
   }

   // Manage albums
   addAlbum(newAlbum) {
       if (!this._albums.includes(newAlbum)) {
           this._albums.push(newAlbum);
           console.log(`${newAlbum} added successfully`);
       } else {
           console.log(`${newAlbum} already exists in the albums list`);
       }
   }

   // Shuffle albums
   shuffle() {
       for (let i = this._albums.length - 1; i > 0; i--) {
           const j = Math.floor(Math.random() * (i + 1));
           [this._albums[i], this._albums[j]] = [this._albums[j], this._albums[i]];
       }
       return this._albums;
   }
}

// Catalog class to manage all media items
class Catalog {
   constructor() {
       this._mediaItems = [];
   }

   // Getters
   get mediaItems() {
       return this._mediaItems;
   }

   // Add media item to catalog
   addMediaItem(mediaObject) {
       this._mediaItems.push(mediaObject);
   }

   // Find media by title
   findMediaByTitle(title) {
       const foundItems = this._mediaItems.filter(item => item.title.toLowerCase() === title.toLowerCase());
       return foundItems.length > 0 ? foundItems : 'No items found with that title.';
   }
}




