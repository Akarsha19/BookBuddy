import { useState, useEffect } from "react";


const AllBooks = () => {
  const [books, setBooks] = useState([]);


  useEffect(() => {
    const getBooks = async () => {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books');

      const allBooks = await response.json();
      console.log(allBooks);
      setBooks(allBooks.books);
    }
    getBooks();
  }, []);

  return (
    <>


      {

        books.map((singleBook) => {
          return <li>{singleBook.title}
            <img src={books.coverimage} style={{ width: 200, height: 200, }}></img>
          </li>
        })

      }

    </>
  )

}
export default AllBooks;