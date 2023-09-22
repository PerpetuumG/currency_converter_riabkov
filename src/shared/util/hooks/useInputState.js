import React, { useState } from 'react';

const UseInputState = () => {
  const [value, setValue] = useState('');
  const [error, setError] = useState(null);

  return {
    value,
    setValue,
    error,
    setError,
  };
};

export default UseInputState;
