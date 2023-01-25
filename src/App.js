import { useEffect, useState } from "react";
import Tree from "./Components/Tree";

function App() {
  const gamesUrl = "https://cdn.freecodecamp.org/testable-projects-fcc/data/tree_map/video-game-sales-data.json";
  const [gamesData, setGamesData]  = useState("");

  useEffect(() => {
    fetch(gamesUrl)
      .then((resp) => resp.json())
      .then((data) => {
        setGamesData(data);
      })
  }, [setGamesData])

  return (
    <div className="App">
      <Tree data={gamesData}/>
    </div>
  );
}

export default App;
