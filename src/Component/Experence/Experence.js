import React from 'react';
import SliderComp from '../SliderComp/SliderComp';
import './Experence.css'
import Cards from '../Profile/Cards/Cards';
import Chart from '../Chart/Chart';
import Piechart from '../Piechart/Piechart';
import ChartLine from '../ChartLine/ChartLine'
import DatePacker from '../DatePacker/DatePacker';
import CustomizedDialogs from '../Dialogs/Dialogs';

const Experence = () => {
    return (
        <div className="experence-section">
            <div style={{display:'flex'}}>
                <div style={{marginRight:'20px'}}>
                    <SliderComp></SliderComp>
                </div>
                <div>
                    <Cards></Cards>
                </div>

            </div>
            <br/>
            <h4>The experence of the following items..</h4>
            <div style={{marginTop:'30px',display:'flex'}}>
            
                <div>
                    <Chart></Chart>
                </div>
                <div>
                    <Piechart></Piechart>
                </div>
                <div>
                    <ChartLine></ChartLine>
                </div>
            </div>
            <div>
                <CustomizedDialogs></CustomizedDialogs>
            </div>
        </div>
    );
};

export default Experence;