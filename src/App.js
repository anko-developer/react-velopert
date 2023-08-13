import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './components/styled/Button';

const AppBlock = styled.div`
  width: 512px;
  margin: 0 auto;
  margin-top: 4rem;
  border: 1px solid black;
  padding: 1rem;
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        palette: {
          blue: '#228be6',
          gray: '#495057',
          pink: '#f06595'
        }
      }}
    >
      <AppBlock>
        <Button size="small" outline>버튼</Button>
        <Button color="pink" >버튼</Button>
        <Button color="gray" size="large" >버튼</Button>
      </AppBlock>
    </ThemeProvider>
  )
}

// import React, { useReducer, useMemo, useState } from 'react';
// import UserList from './UserList';
// import CreateUser from './CreateUser';
// import Button from './components/Button';
// import CheckBox from './components/CheckBox';

// function countActiveUsers(users) {
//   console.log('활성 사용자수 세는 중');
//   return users.filter((use) => use.active).length;
// }

// const initialState = {
//   inputs: {
//     username: '',
//     email: '',
//   },
//   users: [
//     {
//       id: 1,
//       username: 'velopert',
//       email: 'public.velopert@gmail.com',
//       active: true,
//     },
//     {
//       id: 2,
//       username: 'tester',
//       email: 'tester@example.com',
//       active: false,
//     },
//     {
//       id: 3,
//       username: 'liz',
//       email: 'liz@example.com',
//       active: false,
//     },
//   ],
// };

// export const UserDispatch = React.createContext(null);

// function reducer(state, action) {
//   switch (action.type) {
//     case 'CREATE_USER':
//       return {
//         // inputs: initialState.inputs,
//         ...state,
//         users: state.users.concat(action.user),
//       };

//     case 'TOGGLE_USER':
//       return {
//         ...state,
//         users: state.users.map((user) =>
//           user.id === action.id ? { ...user, active: !user.active } : user,
//         ),
//       };

//     case 'REMOVE_USER':
//       return {
//         ...state,
//         users: state.users.filter((user) => user.id !== action.id),
//       };

//     default:
//       return state;
//   }
// }

// function App() {
//   const [state, dispatch] = useReducer(reducer, initialState);
//   const { users } = state;
//   const count = useMemo(() => countActiveUsers(users), [users]);

//   const [check, setCheck] = useState(false);
//   const onChange = e => {
//     setCheck(e.target.checked);
//   };
//   return (
//     <UserDispatch.Provider value={dispatch}>
//       <div>
//         <CheckBox onChange={onChange} checked={check}>약관에 모두 동의</CheckBox>
//         <p>check: {check.toString()}</p>
//       </div>
//       <div className="buttons">
//         <Button
//           size="large"
//           color="pink"
//           onClick={() => {
//             console.log('test!');
//           }}
//           onFocus={() => {
//             console.log('Focus!!!');
//           }}
//         >
//           하이
//         </Button>
//         <Button>보통</Button>
//         <Button size="small" color="gray">
//           하이
//         </Button>
//       </div>

//       <div className="buttons">
//         <Button color="pink" outline>
//           하이
//         </Button>
//         <Button>보통</Button>
//         <Button color="gray" outline>
//           하이
//         </Button>
//       </div>
//       <CreateUser />
//       <UserList users={users} />
//       <div>활성사용자 수 : {count}</div>
//     </UserDispatch.Provider>
//   );
// }

export default App;
