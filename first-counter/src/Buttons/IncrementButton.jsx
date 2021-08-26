import { useDispatch } from "react-redux";


function IncrementButton() {
  const dispatch = useDispatch();

  const handleincrement = () => {
      dispatch({type: "counter/increment"})
  };
  return (
    <div>
      <button onClick={handleincrement}>+</button>
    </div>
  );
}
export default IncrementButton;
