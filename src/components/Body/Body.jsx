import "./styles.css";
import Card from "../Others/Card";
import { Link } from "react-router-dom";
import useMainData from "../Others/useMainData";
import useOnlineStatus from "../Others/useOnlineStatus";
import { useState } from "react";

const Body = () => {
  const [page, setPage] = useState(1);
  const games = useMainData(page);
  const isOnline = useOnlineStatus();
  const setPageHandler = () => {
    setPage(page+1);
  };
  const setPageHandlerPrev = () => {
    if (page >= 1) setPage(page-1);
  };

  if (!isOnline) return <h1>You are offline 🔴</h1>;

  return (
    <div className="container-body">
      {games.map(({ id, name, background_image }) => (
        <Link key={id} to={`/game/${id}`}>
          <Card name={name} image={background_image} />
        </Link>
      ))}

      <div className="pagination">
        <button onClick={setPageHandlerPrev}>previous</button>
        <button onClick={setPageHandler}>next</button>
      </div>
    </div>
  );
};

export default Body;
