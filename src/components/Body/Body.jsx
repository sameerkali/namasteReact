import "./styles.css";
import Card from "../Others/Card";
import { Link } from "react-router-dom";
import useMainData from "../Others/useMainData";
import useOnlineStatus from "../Others/useOnlineStatus";

const Api_url = process.env.Game_api_key;

const Body = () => {
  const games = useMainData(Api_url);
  const isOnline = useOnlineStatus();

  return (
    <div className="container-body">
      {games.map(({ id, name, background_image }) => (
        <Link key={id} to={`/game/${id}`}>
          <Card name={name} image={background_image} />
        </Link>
      ))}
    </div>
  );
};

export default Body;
