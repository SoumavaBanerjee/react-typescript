import { useState } from "react";

// Basic controlled input example using typescript

const GuestList: React.FC = () => {
  const [name, setName] = useState("");

  //   Tell Ts that state is an array of strings. Otherwise it will
  //   Infer a type of Never[]
  const [guests, setGuests] = useState<Array<string>>([]);

  const onClick = () => {
    setName("");
    setGuests([...guests, name]);
  };

  return (
    <div>
      <h1>Guest List</h1>
      <div>
        {guests.map((guest, index) => {
          return <h4 key={index}>{`${index + 1} ${guest}`}</h4>;
        })}
      </div>
      <br />
      <input
        type="text"
        placeholder="name..."
        onChange={(e) => setName(e.target.value)}
        value={name}
      />
      <button onClick={onClick}>Add</button>
    </div>
  );
};

export default GuestList;
