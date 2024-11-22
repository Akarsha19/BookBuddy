import { useState } from "react";

const LoginForm = () => {
  const [logInEmail, setLogInEmail] = useState('');
  const [logInPassword, setLogInPassword] = useState('');

  const logInUser = async (event) => {
    event.preventDefault();
    console.log(`LOGIN EMAIL`, logInEmail);

    try {
      const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
        method: 'POST',
        headers: {
          'Content-Type': "application/json"
        },
        body: JSON.stringify({
          email: logInEmail,
          password: logInPassword
        })
      });
      const responseJson = await response.json();


      setLogInEmail('');
      setLogInPassword('');
    } catch (err) {
      //console.log(err);
    }
  }
  return (
    <>
      <h2>LogIn</h2>

      <form onSubmit={logInUser}>
        <input
          placeholder="email"
          value={logInEmail}
          onChange={(event) => { setLogInEmail(event.target.value) }}
        />

        <input
          placeholder="password"
          value={logInPassword}
          onChange={(event) => { setLogInPassword(event.target.value) }}
        />

        <button>Log In</button>
      </form>
    </>
  )
}




export default LoginForm