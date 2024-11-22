import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

const SingleBook = () => {
  const [selectedBook, setSelectedBook] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const getBook = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
      const book = await response.json();
      //console.log(book);
      setSelectedBook(book.books);
    }
    getBook()
  }, []);

  return (

    <>{

      selectedBook.map((singleBook) => {
        return <li>{singleBook.title}
          <img src={selectedBook.coverimage} style={{ width: 200, height: 200, }}></img>
        </li>
      })

    }</>
    // <section>

    //   <h1>Single Book: {selectedBook.id}</h1>
    //   <h1>{selectedBook.author}</h1>
    //   <h1>{selectedBook.title}</h1>

    // </section >


  )
}
export default SingleBook;