import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '명욱',
    title: '개발자',
    mentor: {
      name: '앙꼬',
      title: '강아지',
    }
  });
  return (
    <div>
      <h1>
        {person.name}는 {person.title}
      </h1>
      <p>멘토는 {person.mentor.name}, 직업은 {person.mentor.title}</p>
      <button onClick={() => {
        const name = prompt('멘토의 이름은?');
        setPerson((person) => {
          return {
            ...person,
            mentor: {
              ...person.mentor,
              name,
            }
          };
        })
      }}>멘토 이름 바꾸기</button>
      <button onClick={() => {
        const title = prompt('멘토의 직업은?');
        setPerson((person) => {
          return {
            ...person,
            mentor: {
              ...person.mentor,
              title,
            }
          };
        })
      }}>멘토 타이틀 바꾸기</button>
    </div>
  );
}

