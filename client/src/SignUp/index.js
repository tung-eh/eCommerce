import React, {useState} from 'react';
import {navigate} from '@reach/router';

const SignUp = () => {
  const [input, updateInput] = useState({name: '', email: '', password: ''});

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/signup', {
      method: 'POST',
      body: JSON.stringify(input),
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then(response => {
        if (response.ok) {
          return response.json();
        } else {
          throw new Error('Something went wrong ...');
        }
      })
      .then(data => {
        alert(
          "Signed up successfully. Let's login to the account you've just created",
        );
        navigate('/login');
      })
      .catch(error => console.log(error));
  };

  const handleInputChange = name => e => {
    updateInput({...input, [name]: e.target.value});
  };

  return (
    <form>
      <div>
        <input
          placeholder="Your name"
          value={input.name}
          onChange={handleInputChange('name')}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Your email"
          value={input.email}
          onChange={handleInputChange('email')}
        />
      </div>
      <div>
        <input
          type="password"
          placeholder="Your password"
          value={input.password}
          onChange={handleInputChange('password')}
        />
      </div>
      <button onClick={handleSubmit}>Sign Up</button>
    </form>
  );
};

export default SignUp;
