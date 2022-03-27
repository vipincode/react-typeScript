import { useState } from 'react';

const users = [
  { id: 1, name: 'Vipin', age: 20 },
  { id: 2, name: 'Rajesh', age: 20 },
  { id: 3, name: 'Vineet', age: 20 },
  { id: 4, name: 'Arun', age: 20 },
  { id: 5, name: 'Priya', age: 20 },
];

type userType = {
  id: number;
  name: string;
  age: number;
};

export const UserSearch: React.FC = () => {
  const [name, setName] = useState('');
  const [user, setUser] = useState<userType | undefined>();

  const findUser = () => {
    const foundUsers = users.find((user) => {
      return user.name === name;
    });
    setUser(foundUsers);
  };
  return (
    <div>
      <h1>Serch user</h1>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={findUser}>Search User</button>
      <div>
        {/* Try to print user when `user is a truthy value` */}
        {/* <p>{user && user.name}</p> */}
        <p>{user?.name}</p>
        <p>{user?.age}</p>
      </div>
    </div>
  );
};
