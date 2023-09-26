import { Link } from "react-router-dom";

const navbar = () => {
  return (
    <div>
      <h1>navbar</h1>
      <Link style={{ marginLeft: "1rem" }} to={`/`}>
        Home
      </Link>
      <Link style={{ marginLeft: "1rem" }} to={`/table`}>
        Table
      </Link>
      <Link style={{ marginLeft: "1rem" }} to={`/error`}>
        Error Page
      </Link>
      <Link style={{ marginLeft: "1rem" }} to={`/about`}>
        About Page
      </Link>
      <Link style={{ marginLeft: "1rem" }} to={`/contact`}>
        Contact Page
      </Link>
      <div>
        <h1> Sameer Faridi</h1>
        <h1> Sameer Faridi</h1>
        <h1> Sameer Faridi</h1>
        <h1> Sameer Faridi</h1>
      </div>
    </div>
  );
};

export default navbar;
