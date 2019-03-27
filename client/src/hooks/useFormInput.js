import {useState} from 'react';

const useFormInput = (initialValues = {}) => {
  const [input, updateInput] = useState(initialValues);

  const handleInputChange = name => e => {
    updateInput({...input, [name]: e.target.value});
  };

  return [input, handleInputChange];
};

export default useFormInput;
