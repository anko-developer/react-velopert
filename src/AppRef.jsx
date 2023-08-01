import React, { useRef } from 'react';
import Input from './components/Input';

export default function AppRef() {
  const nameInput = useRef();
  const handleFocus = () => {
    nameInput.current.focus();
    console.log(nameInput.current);
  };
  
  return (
    <>
      <Input el={nameInput} name="name" />
      <Input name="password" />
      <button onClick={handleFocus}>클릭!</button>
    </>
  );
}

