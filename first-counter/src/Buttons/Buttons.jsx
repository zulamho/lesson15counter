import IncrementButton from "./IncrementButton";
import DecrementButton from "./DecrementButton";
import ResetButton from "./ResetButton";
import RondomButton from "./RondomButton";

function Buttons() {
  return (
    <div className="Buttons">
      <IncrementButton />
      <DecrementButton />
      <ResetButton />
      <RondomButton/>
    </div>
  );
}

export default Buttons;
