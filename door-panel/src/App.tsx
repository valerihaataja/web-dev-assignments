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
    let isRoom = eb.sorted_assets.by_type.room.find((obj: { id: string; }) => obj.id === filterText);
    let path = `room/${filterText}`;
    if (isRoom) {
      navigate(path);
    } else {
      navigate("notfound");
    }
    setFilterText("");
  }
  return (
    <div className='Root'>
      <nav>
        <input
          value={filterText}
          onChange={(event) => {
            setFilterText(event.target.value);
          }}
        />
        <button onClick={routeChange}>Search</button>
      </nav>
      <Outlet />
    </div>
  );

}



export default App;
