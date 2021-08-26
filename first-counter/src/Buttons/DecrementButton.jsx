import { useDispatch } from "react-redux";

function DecrementButton() {
  const dispatch = useDispatch();

  const handleDecrement = () => {
    dispatch({ type: "counter/decrement" });
  };
  return (
    <div>
      <button onClick={handleDecrement}>-</button>
    </div>
  );
}
export default DecrementButton;
