import React, {useState} from 'react';

export default function Input({ name, el }) {
  const [text, setText] = useState('');

  const handleChange = (e) => {
    const { value } = e.target;
    setText(value);
  };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setText({
  //     name: '',
  //     nickname: '',
  //   });
  // };
  return <input ref={el} onChange={handleChange} name={name} value={text} />;
};