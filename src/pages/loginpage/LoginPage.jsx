import {useState} from "react";

export default function LoginPage(props) {
  const [userName, setUserName] = useState('')

  const handleChange = (evt) => {
    setUserName(evt.target.value)
  }

  const handleSubmit = (evt) => {
    evt.preventDefault()
    props.setUser(userName)
  }
    return (
      <>
        <h1>Login Page </h1>
        <h3>Hello unknown person. Please enter your name.</h3>
        <form onSubmit={handleSubmit}>
          <label>Username: </label>
          <input type='test' onChange={handleChange} />
          <button type='submit'>Sign In</button>
        </form>
      </>
    );
  }
  