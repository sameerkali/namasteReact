import Shimmer from "../Others/shimmar";
import { useParams, Link } from "react-router-dom";
import useApiDetails from "../Others/useApiDetails";

const Details = () => {
  const { gameId } = useParams();
  const details = useApiDetails(gameId); // fetching the data with help of custome hook

  return (
    <>
      <Link to={`/`}>
        <h1>Home</h1>
      </Link>
      {details ? ( // Check if details is not null
        <div key={details.id}>
          <h1>{details.name}</h1>
          <img src={details.background_image} height={300} />
          <p>{details.rating}</p>
          <p>{details.updated}</p>
          <span>{details.requirements_en}</span>
          <p>{details.description}</p>
        </div>
      ) : (
        <Shimmer /> // Show a loading component while details are being fetched
      )}
    </>
  );
};

export default Details;
