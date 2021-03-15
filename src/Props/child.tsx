// create interface for props to get TypeChecking and stuff. It also checks if the parent component is
// pasing down the correct props.

interface styleProps {
  color: string;
  onclick: () => void;
}

// props using interfaces.
export const Child = ({ color, onclick }: styleProps) => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onclick}> Click me </button>
    </div>
  );
};

//  it explicitly tells TS that the function's returning a REACT Component. IT also support children props
// by default
export const ChildFC: React.FC<styleProps> = ({ color, onclick }) => {
  return (
    <div>
      <h1>{color}</h1>
      <button onClick={onclick}> Click me </button>
    </div>
  );
};
ChildFC.displayName = "RenamedChildFC";
