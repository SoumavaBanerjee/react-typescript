import { useState, useRef, useEffect } from "react";

const userList = [
  { name: "Frost", age: 20 },
  { name: "Byte", age: 20 },
  { name: "Brad", age: 20 },
];

const UserSearch: React.FC = () => {
  const [name, setName] = useState("");

  // user can be both undefined or {name: string, age: number}. So we use Union types
  const [user, setUser] = useState<{ name: string; age: number } | undefined>();

  // inputRef is null at first render but can be an input HTML element.
  // we initialize inputRef with null.
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    inputRef.current?.focus();
  }, []);

  const onclick = () => {
    const foundUser = userList.find((user) => {
      return user.name === name;
    });

    setUser(foundUser);
  };

  return (
    <div>
      <h1>Userlist</h1>
      <br />
      <input
        type="search"
        placeholder="name..."
        value={name}
        ref={inputRef}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={onclick}>search</button>
      <br />
      <br />
      <div>{user?.name}</div>
      <div>{user?.age}</div>
    </div>
  );
};

export default UserSearch;
