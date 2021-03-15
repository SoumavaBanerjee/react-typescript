import { Child, ChildFC } from "./child";

const parent = () => {
  return (
    <div>
      <Child
        color="blue"
        onclick={() => {
          console.log("onclick");
        }}
      />

      <ChildFC
        color="green"
        onclick={() => {
          console.log(+1);
        }}
      >
        hello
      </ChildFC>
    </div>
  );
};

export default parent;
