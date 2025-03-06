import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Week 1', users: 4000, sales: 2400 },
  { name: 'Week 2', users: 3000, sales: 1398 },
  { name: 'Week 3', users: 2000, sales: 9800 },
  { name: 'Week 4', users: 2780, sales: 3908 },
];

const AnalyticsChart = () => {
  return (
    <ResponsiveContainer width="100%" height={400}>
      <AreaChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="users" stackId="1" stroke="#3b82f6" fill="#93c5fd" />
        <Area type="monotone" dataKey="sales" stackId="1" stroke="#22c55e" fill="#86efac" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default AnalyticsChart;