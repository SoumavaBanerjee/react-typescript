import { Child, ChildFC } from "./child";

const parent = () => {
  return (
    <div>
      <Child color="blue" />
      <ChildFC color="blue" />
    </div>
  );
};

export default parent;
