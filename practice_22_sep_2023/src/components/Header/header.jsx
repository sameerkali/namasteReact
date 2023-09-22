import { GamepadIcon } from "lucide-react";
import "./styles.css";

const header = () => {
  return (
    <div>
      <div className="header">
        <GamepadIcon className="left icon" /> <h2>GameRide_s</h2>
        <ul className="ul right">
          <li>Home</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <ul className="ul ">
          <li>Cart</li>
          <button className="btn right " onClick={() => {}}>
            Login
          </button>
        </ul>
      </div>
    </div>
  );
};

export default header;
