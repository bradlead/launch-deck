import React, {component} from 'React'
import { BarChart, Bar, XAxis, YAxis, LabelList, Text, Tooltip, CartesianGrid } from 'recharts';

const data = [{name: 'Improver Innovator', votes: 11}, {name: 'Critical Thinker', votes: 7}, {name: 'Change Ready', votes: 4}, {name: 'Trusted Advisor', votes: 4}, {name: 'Connected Behaviours', votes: 2}];


const Chart = () => (
  <BarChart width={800} height={450} data={data} margin={{ top: 60, right: 20, bottom: 25, left: 20 }}>
    <XAxis dataKey="name" stroke="#8884d8" hide={false} tick={false} />
    <YAxis />
    <Tooltip />
    <Text scaleToFit={true} width="0"/>
    <Bar type="monotone" dataKey="votes" fill="#8884d8" barSize={60} >
    </Bar>
  </BarChart>
);

export default Chart
