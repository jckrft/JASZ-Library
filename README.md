# JASZ-Library

## Overview
Books
- Get all books
- Add a book
- Edit a book
- Delete a book
- Personalized book list (post-mvp?)



## Whimsical Flowchart

Home Page:
	- Nav w/ logo
	- Photo with a small link to see the books
	- Footer

Listing Screen:
	- Nav w/ logo
	- Display all books in database
	- Footer

Detail Screen
	- Nav w/ logo
	- Display details of a specific book
	- Footer

Edit Screen
	- Nav w/ logo
	- Edit details of a specific book
	- Footer

Add Screen
	- Nav w/ logo
	- Add a book to the library
	- Footer

Sign-Up Screen
	- Nav w/ logo
	- Add details to create a new user
	- Footer

Sign-in Screen
	- Nav w/ logo
	- Sign in a user based on existing user info
	- Footer

## Schema

### Book Schema:


### User Schema:

const User = new Schema(
  {
    username: {
      type: String,
      required: true,
    },
    email: { type: String, required: true },
    password_digest: { type: String, required: true, select: false },
  },
  { timestamps: true }
)


## Team Expectations

Link to [Team Expectations Document](https://docs.google.com/document/d/1WMG7CX3tmeAdju4malt2lE7Vz8K2oUcaGM85A9WGWhY/edit)

## MVP