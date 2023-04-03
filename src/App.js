import React from "react";
import NavBar from "./Components/NavBar/NavBar";
import Banner from "./Components/Banner/Banner";
import {action,originals,comedy,horror} from './urls'
import './Components/App.css'
import RowPost from "./Components/RowPost/RowPost";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <RowPost url={originals} title="Netflix Originals"/>
      <RowPost url={action} title="Action Movies" isSmall/>
      <RowPost url={comedy} title="Comedy Movies" isSmall/>
      <RowPost url={horror} title="Horror Movies" isSmall/>
    </div>
  );
}

export default App;
