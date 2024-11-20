import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import AllBooks from './AllBooks';
import SingleBook from './SingleBook';

function App() {

  return (
    <>
      <h1>Book Buddy!</h1>
      <div>
        <Routes>
          <Route path="/books" element={<AllBooks />} />
          <Route path="/books/:id" element={<SingleBook />} />
        </Routes>
      </div>

    </>
  )
}

export default App
