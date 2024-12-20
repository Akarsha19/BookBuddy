import { useState } from 'react'
import { Routes, Route } from 'react-router-dom';
import AllBooks from './AllBooks';
import SingleBook from './SingleBook';
import LoginForm from './Login';
import RegisterForm from './Register';

function App() {

  return (
    <>
      <h1>Book Buddy!</h1>
      <div>
        <Routes>
          <Route path="/books" element={<AllBooks />} />
          <Route path="/books/:id" element={<SingleBook />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
        </Routes>
      </div>

    </>
  )
}

export default App
