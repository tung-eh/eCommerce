import {navigate} from '@reach/router';
import React from 'react';

import {useFetch, useFormInput} from '../../../hooks';

const SignUp = () => {
  const [input, handleInputChange] = useFormInput({
    name: '',
    email: '',
    password: '',
  });
  const {triggerFetch} = useFetch({
    url: '/api/signup',
    method: 'POST',
    dataObj: input,
    successCb: data => {
      alert(
        "Signed up successfully. Let's login to the account you've just created",
      );
      navigate('/login');
    },
  });

  return (
    <div>
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
      <button onClick={triggerFetch}>Sign Up</button>
    </div>
  );
};

export default SignUp;
