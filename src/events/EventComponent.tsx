const EventComponent: React.FC = () => {
  // There are different events in react just like changeEvent
  /**
   *
   * @ProTip onChange = {(e) => {}}; hover over e and you will get the type definition of e.
   */
  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e);
  };
  return (
    <div>
      <input type="text" onChange={onChange} />
    </div>
  );
};

export default EventComponent;
