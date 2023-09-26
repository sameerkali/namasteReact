
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
      <p>this is Home Page</p>
      <Link to={`/navbar`} > Navbar</Link>
    </div>
  );
};

export default Home;
