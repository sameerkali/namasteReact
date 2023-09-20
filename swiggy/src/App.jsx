/* eslint-disable react/prop-types */
import "./App.css";
import { rastorent_data } from "./components/data";
import Card from "./components/card";
import API from "./components/apiCall";

function App() {
  const info = rastorent_data.imageGridCards.info;
  return (
    <div>
    <API />
    
      {info.map((card) => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
}

export default App;
