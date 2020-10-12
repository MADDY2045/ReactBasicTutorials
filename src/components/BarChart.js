import React from 'react';
import { Bar } from 'react-chartjs-2';


const data = {
    labels:['Jan','Feb','Mar','Apr','May'],
    datasets:[
        {
        label:'Rainfall',
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgba(0,0,0,1)',
        borderWidth: 2,
        data: [6, 100, 80, 81, 56]
        },
        {
            label:'Thunderstorm',
            height:100,
            backgroundColor: 'rgba(100,81,110,1)',
            borderColor: 'rgba(0,0,0,1)',
            borderWidth: 2,
            data: [60, 10, 9, 51, 36]
            }
    ]
}
const BarChart = () => {
    return (
        <div className="container card">
            <h1>Bar Chart</h1>
            <Bar
            data={data}
            width={10}
            height={5}
            options={{title:{display:true,text:'Average Rainfall per month',fontSize:20},legend:{display:true,position:'bottom'}}}/>
        </div>
    );
}

export default BarChart;
