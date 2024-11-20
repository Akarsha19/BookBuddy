import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const SingleBook = () => {
  const { id } = useParams();

  useEffect(() => {
    const getBook = async () => {
      const response = await fetch(`https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${id}`)
      const selectedBook = await response.json();
      console.log(selectedBook);
    }
    getBook()
  }, []);

  return (<h1>Single Book ID: {id}</h1>)
}
export default SingleBook;