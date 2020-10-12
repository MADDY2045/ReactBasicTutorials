import React,{ useState,useEffect } from 'react';
import { Doughnut } from 'react-chartjs-2';

const PieChart = () => {
    const [data,setData] = useState({});

    useEffect(()=>{
        setInterval(()=>{
            setData({
                labels: ['January', 'February', 'March',
                         'April', 'May'],
                datasets: [
                  {
                    label: 'Rainfall',
                    backgroundColor: [
                      '#B21F00',
                      '#C9DE00',
                      '#2FDE00',
                      '#00A6B4',
                      '#6800B4'
                    ],
                    hoverBackgroundColor: [
                    '#501800',
                    '#4B5000',
                    '#175000',
                    '#003350',
                    '#35014F'
                    ],
                    data: [(Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1), (Math.floor(Math.random() * 100) + 1)]
                  }
                ]
              })
        },2000)
    },[]);

    return (
        <div className="container card">
            <h4>Doughnut Chart</h4>
            <Doughnut data={data}  options={{
            title:{
              display:true,
              text:'Average Rainfall per month',
              fontSize:20
            },
            legend:{
              display:true,
              position:'right'
            }
          }}/>

        </div>
    );
}

export default PieChart;
