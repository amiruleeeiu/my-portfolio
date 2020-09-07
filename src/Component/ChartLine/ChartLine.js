import React, { PureComponent } from 'react';
import {
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip
} from 'recharts';

const data = [
  {
    name: 'react', uv: 1000, pv: 2400, amt: 2400,
  },
  {
    name: 'Javascript', uv: 2000, pv: 1398, amt: 2210,
  },
  {
    name: 'html', uv: 4000, pv: 9800, amt: 2290,
  },
  {
    name: 'CSS', uv: 2780, pv: 3908, amt: 2000,
  }
];

export default class Example extends PureComponent {
  static jsfiddleUrl = 'https://jsfiddle.net/alidingling/nskpgcrz/';

  render() {
    return (
      <div>
        <h4>A demo of synchronized AreaCharts</h4>
        <LineChart
          width={300}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10, right: 5, left: 0, bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Line type="monotone" dataKey="uv" stroke="#8884d8" fill="#8884d8" />
        </LineChart>
        <p>Maybe some other content</p>
        
      </div>
    );
  }
}
