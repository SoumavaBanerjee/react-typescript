// create interface for props to get TypeChecking and stuff. It also checks if the parent component is
// pasing down the correct props.

interface styleProps {
  color: string;
}

// props using interfaces.
export const Child = ({ color }: styleProps) => {
  return <h1>{color}</h1>;
};

//  it explicitly tells TS that the function's returning a REACT Component.
export const ChildFC: React.FC<styleProps> = ({ color }) => {
  return <h1>{color}</h1>;
};
ChildFC.displayName = "RenamedChildFC";
