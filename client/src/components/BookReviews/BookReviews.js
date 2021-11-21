import './BookReviews.css'

const BookReviews = () => {
  return (
    <div className='book-reviews-container'>
      <h4 className='staff-picks'>Staff Picks</h4>
      <div className='book-reviews'>
        <div className='book-1'>
          <img
            src='http://prodimage.images-bn.com/pimages/9781788289702_p0_v1_s1200x630.jpg'
            alt='metamorphosis'
          />
          <p className='book-1-p'>"The Metamorphosis is one of those rare books that completely sucks you in and shows you a world so distorted, dark, and yet so real that your mind learns the art of imagination."</p>
        </div>

        <div className='book-2'>
          <img
            src='https://images-na.ssl-images-amazon.com/images/I/91p-SU6ZFbL.jpg'
            alt='the gone away world'
          />
          <p className='book-2-p'>"The Gone-Away World is a long story that absolutely revels in its digressions and manic humor that relentlessly attacks the insanity of the military weapons mentality and the soul-destroying nature of corporations and conformity."</p>
        </div>
      </div>
    </div>
  )
}

export default BookReviews