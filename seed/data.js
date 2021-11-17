import db from '../db/connection.js'
import Book from '../models/book.js'
import User from '../models/user.js'
import bcrypt from 'bcrypt'

const insertData = async () => {
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
    },
    {
      title: "Catch-22",
      author: "Joseph Heller",
      genre: "Historical Fiction",
      imgURL: "https://upload.wikimedia.org/wikipedia/en/9/99/Catch22.jpg",
      description: "The novel is set during World War II, from 1942 to 1944. It mainly follows the life of antihero Captain John Yossarian, a U.S. Army Air Forces B-25 bombardier. Most of the events in the book occur while the fictional 256th US Army Air Squadron is based on the island of Pianosa, in the Mediterranean Sea west of Italy, though it also covers episodes from basic training at Lowry Field in Colorado and Air Corps training at Santa Ana Army Air Base in California. The novel examines the absurdity of war and military life through the experiences of Yossarian and his cohorts, who attempt to maintain their sanity while fulfilling their service requirements so that they may return home."
    },
    {
      title: "Meditations", 
      author: "Marcus Aurelius",
      genre: "Philosophy",
      imgURL: "https://images-na.ssl-images-amazon.com/images/I/51cQEdN9KuL.jpg",
      description: "Meditations is a series of personal writings by Marcus Aurelius, Roman Emperor 161–180 CE, setting forth his ideas on Stoic philosophy.Marcus Aurelius wrote the 12 books of the Meditations in Koine Greek as a source for his own guidance and self-improvement. It is possible that large portions of the work were written at Sirmium, where he spent much time planning military campaigns from 170 to 180. Some of it was written while he was positioned at Aquincum on campaign in Pannonia, because internal notes tell us that the second book was written when he was campaigning against the Quadi on the river Granova (modern-day Hron) and the third book was written at Carnuntum. It is not clear that he ever intended the writings to be published, so the title Meditations is but one of several commonly assigned to the collection. These writings take the form of quotations varying in length from one sentence to long paragraphs."
    },
    {
      title: "Till We Have Faces",
      author: "C.S. Lewis",
      genre: "Mythological Novel",
      imgURL: "https://images-na.ssl-images-amazon.com/images/I/51AYRqj42rL._SY291_BO1,204,203,200_QL40_FMwebp_.jpg",
      description: "Till We Have Faces: A Myth Retold is a 1956 novel by C. S. Lewis. It is a retelling of Cupid and Psyche, based on its telling in a chapter of The Golden Ass of Apuleius. This story had haunted Lewis all his life, because he realized that some of the main characters’ actions were illogical."
    },
    {
      title: "A Brief History of Time",
      author: "Stephen Hawking",
      genre: "Popular Science",
      imgURL: "https://images-na.ssl-images-amazon.com/images/I/51xE6ZCQdqS._SX331_BO1,204,203,200_.jpg",
      description: "A landmark volume in science writing by one of the great minds of our time, Stephen Hawking’s book explores such profound questions as: How did the universe begin—and what made its start possible? Does time always flow forward? Is the universe unending—or are there boundaries? Are there other dimensions in space? What will happen when it all ends?"
    },
    {
      title: "The History of Love",
      author: "Nicole Krauss",
      genre: "Postmodernism",
      imgURL: "https://images-na.ssl-images-amazon.com/images/I/71R6SnmbcAL.jpg",
      description: "The History of Love by Nicole Krauss intertwines romantic and mysterious elements into a story about love, loss, and identity. Structured as a book-within-a-book, the novel explores the impact that one supposedly lost manuscript has on the lives of several people."
    },
    {
      title: "Laughter in the Dark",
      author: "Vladimir Nabokov",
      genre: "Psychological Fiction",
      imgURL: "https://images-na.ssl-images-amazon.com/images/I/417bSte7tVL._SX342_SY445_QL70_FMwebp_.jpg",
      description: "Albinus, a respectable, middle-aged man and aspiring filmmaker, abandons his wife for a lover half his age: Margot, who wants to become a movie star herself. When Albinus introduces her to Rex, an American movie producer, disaster ensues. What emerges is an elegantly sardonic and irresistibly ironic novel of desire, deceit, and deception, a curious romance set in the film world of Berlin in the 1930s."
    },
    {
      title: "Brave New World",
      author: " Aldous Huxley",
      genre: "Science Fiction",
      imgURL: "https://images-na.ssl-images-amazon.com/images/I/81zE42gT3xL.jpg",
      description:"Aldous Huxley's profoundly important classic of world literature, Brave New World is a searching vision of an unequal, technologically-advanced future where humans are genetically bred, socially indoctrinated, and pharmaceutically anesthetized to passively uphold an authoritarian ruling order–all at the cost of our freedom, full humanity, and perhaps also our souls. “A genius [who] who spent his life decrying the onward march of the Machine” (The New Yorker), Huxley was a man of incomparable talents: equally an artist, a spiritual seeker, and one of history’s keenest observers of human nature and civilization. Brave New World, his masterpiece, has enthralled and terrified millions of readers, and retains its urgent relevance to this day as both a warning to be heeded as we head into tomorrow and as thought-provoking, satisfying work of literature. Written in the shadow of the rise of fascism during the 1930s, Brave New World likewise speaks to a 21st-century world dominated by mass-entertainment, technology, medicine and pharmaceuticals, the arts of persuasion, and the hidden influence of elites. ",
    }
  ]


  await Book.insertMany(books)
  console.log('Created users & books!')

  db.close()
}

insertData()