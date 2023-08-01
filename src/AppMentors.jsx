import React, { useState } from 'react';

export default function AppMentor() {
  const [person, setPerson] = useState({
    name: '명욱',
    title: '개발자',
    mentors: [
      {
        name: '제니',
        title: '강아지2',
      },
      {
        name: '보니',
        title: '강아지1',
      }
    ]
  });
  return (
    <div>
      <h1>
        {person.name}(은)는 {person.title}
      </h1>
      <ul>
        {person.mentors.map((mentor, index) => {
          return <li key={index}>{mentor.name} {mentor.title}</li>
        })}
      </ul>
      <button onClick={() => {
        const prev = prompt('누구의 이름을 바꿀거야?');
        const current = prompt('어떤 이름으로 바꿀거야?');
        
        setPerson(person => ({
          ...person,
          mentors: person.mentors.map((mentor) => {
            if (mentor.name === prev.trim()) {
              return { ...mentor, name: current }
            }

            return mentor;
          })
        }));
      }}>멘토 이름 바꾸기</button>
      <button onClick={() => {
        const prev = prompt('누구의 타이틀을 바꿀거야?');
        const current = prompt('어떤 타이틀로 바꿀거야?');
        
        setPerson(person => ({
          ...person,
          mentors: person.mentors.map((mentor) => {
            if (mentor.name === prev.trim()) {
              return { ...mentor, title: current }
            }

            return mentor;
          })
        }));
      }}>멘토 타이틀 바꾸기</button>
    </div>
  );
}

