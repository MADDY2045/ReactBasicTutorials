import React from 'react';
import './App.css';

import BarChart from './components/BarChart';
import LineChart from './components/LineChart';
import PieChart from './components/PieChart';
import DoughnutChart from './components/DoughnutChart';
const App = () => {

  return (
    <div >
      <div className="row col-12 mt-3 ml-3">
          <div className="row col-6">
          <BarChart />
          </div>
          <div className="row col-6">
          <LineChart />
          </div>
       </div>
       <div className="row col-12 mt-3 ml-3">
          <div className="row col-6">
          <PieChart />
          </div>
          <div className="row col-6">
          <DoughnutChart />
          </div>
       </div>
      </div>
  );
}

export default App;
