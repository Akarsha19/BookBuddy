import { useState } from "react";

const RegisterForm = () => {

  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [emailInput, setEmailInput] = useState('');
  const [passwordInput, setPasswordInput] = useState('');

  const registerUser = async (event) => {
    event.preventDefault();

    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          firstname: firstName,
          lastname: lastName,
          email: emailInput,
          password: passwordInput
        })
      });
      const responseJson = await response.json();


      setFirstName('');
      setLastName('');
      setEmailInput('');
      setPasswordInput('');

    } catch (err) {

    }
  }

  return (
    <>
      <h2>Register</h2>

      <form onSubmit={registerUser}>
        <input
          placeholder="first name"
          value={firstName}
          onChange={(event) => { setFirstName(event.target.value) }}
        />

        <input
          placeholder="last name"
          value={lastName}
          onChange={(event) => { setLastName(event.target.value) }}
        />

        <input
          placeholder="email"
          value={emailInput}
          onChange={(event) => { setEmailInput(event.target.value) }} />


        <input
          placeholder="password"
          value={passwordInput}
          onChange={(event) => { setPasswordInput(event.target.value) }} />

        <button>Register</button>
      </form>

    </>
  )
}

export default RegisterForm;