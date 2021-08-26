import { useDispatch } from "react-redux";

function RondomButton() {
  let rand = Math.random() * (100 - 1) + 1;
  rand = Math.ceil(rand);
  const dispatch = useDispatch();
  const handleRondom = (rand) => {
    dispatch({ type: "counter/rondom", payload: { rand } });
  };

  return (
    <div>
      <button onClick={() => handleRondom(rand)}>rondom</button>
    </div>
  );
}
export default RondomButton;
