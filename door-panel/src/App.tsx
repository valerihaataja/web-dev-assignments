import React, { useContext } from 'react';
import { Outlet, Link, useNavigate } from "react-router-dom";
import './App.css';
import { useState } from "react";
import { EbContext } from '.';


function App() {
  const eb = useContext(EbContext) as any;
  const [filterText, setFilterText] = useState("");
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/room/${filterText}`;
    navigate(path);
    setFilterText("");
  }
  return (
    <div className='Root'>
      <nav>
        <input
          value={filterText}
          onChange={(event) => {
            setFilterText(event.target.value);
            console.log(filterText);

          }}
        />
        <button onClick={routeChange}>Search</button>
      </nav>
      <Outlet />
    </div>
  );

}



export default App;
