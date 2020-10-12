import React from 'react';
import './App.css';

import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import DoughnutChart from './components/DoughnutChart';
const App = () => {

  return (
    <div >
      <div className="row col-11 mt-3 ml-3" style={{margin:'10px'}}>
          <div className="row col-5" style={{position:'absolute',left:'150px',top:'30px'}}>
          <BarChart />
          </div>
          <div className="row col-5" style={{position:'absolute',left:'900px',top:'30px'}}>
          <LineChart />
          </div>
       </div>
       <div className="row col-11 mt-3 ml-3" >
          <div className="row col-5" style={{position:'absolute',left:'150px',top:'400px'}}>
          <PieChart />
          </div>
          <div className="row col-5" style={{position:'absolute',left:'900px',top:'400px'}}>
          <DoughnutChart />
          </div>
       </div>
      </div>
  );
}

export default App;
