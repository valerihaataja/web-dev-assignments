import React from 'react';
import './App.css';
import CalendarEventContainer from './components/CalendarEventContainer/CalendarEventContainer';
import Header from './components/Header/Header';

function App() {
  // console.log(window.eb_core);
  return (
    <div className='Root'>
      <Header />
      <div className='App'>
        <h1>Title</h1>
        <h2>A meeting room for 10 people with 1 persion inside</h2>
        <CalendarEventContainer />
        <CalendarEventContainer />
        <div className='row'>
          <p className='text'>Temperature: 21.4</p>
          <p className='text'>CO2: 444</p>
        </div>
      </div>
    </div>
  );

}

export default App;
