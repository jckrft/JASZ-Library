import db from '../db/connection.js'
import Book from '../models/book.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
  // reset database
  await db.dropDatabase()

  const user1 = new User({
    username: 'mali',
    email: 'root@super.gmail.com',
    password_digest: await bcrypt.hash('!a$ecureP@ssw0Rd55!', 11)
  })
  await user1.save()


  const books = [
    {
      title: "When the Elephants Dance",
      author: "Tess Uriza Holthe",
      genre: "Historical Fiction",
      imgURL: "https://m.media-amazon.com/images/I/51yahH8t3PL.jpg",
      description: "It is set in February, 1945 in the Philippines during the final week of the battle for control between the Americans and the Japanese during World War II. The story is divided into four parts, each told from a character’s perspective and detailing events that occur in the moments leading up to the Japanese surrender."
    }
  ]


  await Book.insertMany(books)
  console.log('Created users & books!')

  db.close()
}

insertData()