import { useDispatch } from "react-redux";

function ResetButton() {
  const dispatch = useDispatch();
  const handleResetButton = () => {
    dispatch({ type: "counter/reset" });
  };
  return (
    <div>
      <button onClick={handleResetButton}>reset</button>
    </div>
  );
}

export default ResetButton;
