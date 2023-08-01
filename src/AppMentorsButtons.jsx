import React, { useReducer } from 'react';
import personReducer from './reducer/person-reducer';

export default function AppMentor() {
  // const [person, setPerson] = useState(initialPerson);
  const [person, dispatch] = useReducer(personReducer, initialPerson);
  const handleUpdate = () => {
    const prev = prompt('누구의 이름을 바꿀거야?');
    const current = prompt('어떤 이름으로 바꿀거야?');
    
    dispatch({type: 'updated', prev, current});
  };
  
  const handleAdd = () => {
    const name = prompt('추가 할 이름은?');
    const title = prompt('추가 할 타이틀은?');

    dispatch({type: 'added', name, title});
  };

  const handleDelete = () => {
    const name = prompt('삭제 할 이름은?');
    
    dispatch({type: 'deleted', name});
  };

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
      <button onClick={handleUpdate}>멘토 이름 바꾸기</button>
      <button onClick={handleAdd}>추가</button>
      <button onClick={handleDelete}>삭제</button>
    </div>
  );
}

const initialPerson = {
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
};