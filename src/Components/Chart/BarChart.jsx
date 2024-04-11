import { Bar } from 'react-chartjs-2';
//import { Chart as ChartJs } from 'chart.js/auto';

// eslint-disable-next-line react/prop-types
const BarChart = ({chartData}) =>{
    return(
        <Bar
        data={chartData}
        height={100}
        />
    )
}
export default BarChart;