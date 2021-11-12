# JASZ-Library

## Overview
The JASZ Library is an interactive collection of books that allows anyone to browse the collection. A user can also sign up for an account and log in to add, edit, or delete a book in the collection.


## Whimsical Flowchart

### Pages
![Home Page](assets/home-page.png)
![Browse Page](assets/browse-page.png)
![Detail Page](assets/detail-page.png)
![Add Page](assets/add-page.png)
![Edit Page](assets/edit-page.png)
![Sign-Up Page](assets/sign-up-page.png)
![Sign-In Page](assets/sign-in-page.png)

### Component Hierarchy
![Component Hierarchy](assets/component-hierarchy.png)


## Schema

### Book Schema:

```javascript
const Book = new Schema(
  {
    title: { type: String, required: true },
    author: { type: String, required: true },
    genre: { type: String, required: true },
    imgURL: { type: String, required: true },
    description: { type: String, required: true }
  },
  { timestamps: true }
)
```

### User Schema:

```javascript
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
```

## Team Expectations

Link to [Team Expectations Document](https://docs.google.com/document/d/1WMG7CX3tmeAdju4malt2lE7Vz8K2oUcaGM85A9WGWhY/edit)

### Project Schedule

Day | Goal 
--- | --- 
11/10 | Create repo, brainstorm idea & get approval
11/11 | Off day
11/12 | AM: Finish readme, component hierarchy, figma PM: Start building back-end
11/13 | Off day
11/14 | Finish working on back-end
11/15 | AM: Have back-end finished and deployed, discuss delegating tasks PM: Begin working on individual components
11/16 | Work on individual front-end components
11/17 | Work on individual front-end components and styling
11/18 | Work on individual front-end components and styling
11/19 | Deploy front-end and have all major aspects of project completed
11/20 | Work on post-MVP and styling
11/21 | Work on post-MVP and styling
11/22 | Present project

## MVP

- Home page displaying some of the books in the library
- Browse page getting and showing all books in the library
- Book detail page showing the title, author, genre, cover, and description of the book
- Sign up page to create an account
- Sign in page to sign into your account
- Add a book page to add a book to the library
- Edit a book  page to update info for a book in the library
- Delete a book button to delete a book from the library
- Sort books by alphabetically by title, author (post-MVP)
- Carousel of favorite books of class (post-MVP)
- Personalized book list per user (post-MVP)
- Recommended other books based on genre (post-MVP)
