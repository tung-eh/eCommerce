import React, {useState, useContext} from 'react';
import {navigate} from '@reach/router';

import {AuthContext} from '../AuthProvider';

const SignUp = () => {
  const [input, updateInput] = useState({email: '', password: ''});
  const {authInfo, updateAuthInfo} = useContext(AuthContext);

  const handleSubmit = e => {
    e.preventDefault();
    fetch('/api/login', {
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
        alert('Logged in successfully');
        updateAuthInfo(data);
        navigate('/');
      })
      .catch(error => console.log(error));
  };

  const handleInputChange = name => e => {
    updateInput({...input, [name]: e.target.value});
  };

  return (
    <form>
      <input
        type="email"
        placeholder="Your email"
        value={input.email}
        onChange={handleInputChange('email')}
      />
      <input
        type="password"
        placeholder="Your password"
        value={input.password}
        onChange={handleInputChange('password')}
      />
      <button onClick={handleSubmit}>Login</button>
    </form>
  );
};

export default SignUp;
