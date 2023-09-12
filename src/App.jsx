/* eslint-disable react/prop-types */
import "./App.css";
import { rastorent_data } from "./components/data";
import Card from "./components/card";

function App() {
  const info = rastorent_data.imageGridCards.info;
  return (
    <div>
      {info.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

export default App;
