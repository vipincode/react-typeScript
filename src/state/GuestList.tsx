import { useState } from 'react';

export const GuestList: React.FC = () => {
  const [name, setName] = useState('');
  const [guest, setGuest] = useState<string[]>([]);

  const createGuestList = () => {
    setName('');
    setGuest([...guest, name]);
  };
  return (
    <div>
      <h1>Guest list:</h1>
      <ul>
        {guest.map((guest, index) => (
          <li key={index}>{guest}</li>
        ))}
      </ul>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={createGuestList}>Add guest</button>
    </div>
  );
};
