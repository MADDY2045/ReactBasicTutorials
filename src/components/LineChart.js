import React from 'react';
import { Line } from 'react-chartjs-2';

const data = {
    labels:['Jan','Feb','Mar','Apr','May'],
    datasets:[
        {
        label:'Rainfall',
        fill:false,
        lineTension:0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [6, 100, 80, 81, 56]
        },
        {
            label:'Thunderstorm',
            fill:false,
            lineTension:0.5,
            backgroundColor: '#923FBF',
            borderColor: '#923FBF',
            borderWidth: 2,
            data: [60, 10, 9, 51, 36]
            }
    ]
}
const LineChart = () => {
    return (
        <div className="container card">
            <h1>Line Chart</h1>
            <Line data={data} options={{title:{display:true,text:'Average Rainfall per month',fontSize:20},legend:{display:true,position:'bottom'}}}/>
        </div>
    );
}

export default LineChart;
