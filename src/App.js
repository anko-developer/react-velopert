import React, { useReducer, useMemo } from 'react';
import UserList from './UserList';
import CreateUser from './CreateUser';
import Button from './components/Button';

function countActiveUsers(users) {
  console.log('활성 사용자수 세는 중');
  return users.filter((use) => use.active).length;
}

const initialState = {
  inputs: {
    username: '',
    email: '',
  },
  users: [
    {
      id: 1,
      username: 'velopert',
      email: 'public.velopert@gmail.com',
      active: true,
    },
    {
      id: 2,
      username: 'tester',
      email: 'tester@example.com',
      active: false,
    },
    {
      id: 3,
      username: 'liz',
      email: 'liz@example.com',
      active: false,
    },
  ],
};

export const UserDispatch = React.createContext(null);

function reducer(state, action) {
  switch (action.type) {
    case 'CREATE_USER':
      return {
        // inputs: initialState.inputs,
        ...state,
        users: state.users.concat(action.user),
      };

    case 'TOGGLE_USER':
      return {
        ...state,
        users: state.users.map((user) =>
          user.id === action.id ? { ...user, active: !user.active } : user,
        ),
      };

    case 'REMOVE_USER':
      return {
        ...state,
        users: state.users.filter((user) => user.id !== action.id),
      };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const { users } = state;
  const count = useMemo(() => countActiveUsers(users), [users]);

  return (
    <UserDispatch.Provider value={dispatch}>
      <div className="buttons">
        <Button
          size="large"
          color="pink"
          onClick={() => {
            console.log('test!');
          }}
          onFocus={() => {
            console.log('Focus!!!');
          }}
        >
          하이
        </Button>
        <Button>보통</Button>
        <Button size="small" color="gray">
          하이
        </Button>
      </div>

      <div className="buttons">
        <Button color="pink" outline>
          하이
        </Button>
        <Button>보통</Button>
        <Button color="gray" outline>
          하이
        </Button>
      </div>
      <CreateUser />
      <UserList users={users} />
      <div>활성사용자 수 : {count}</div>
    </UserDispatch.Provider>
  );
}

export default App;
