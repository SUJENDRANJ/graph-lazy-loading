import React from 'react';
import { ComposedChart, Line, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const monthlyData = [
  { name: 'Week 1', revenue: 4000, expenses: 2400, profit: 2400 },
  { name: 'Week 2', revenue: 3000, expenses: 1398, profit: 2210 },
  { name: 'Week 3', revenue: 2000, expenses: 9800, profit: 2290 },
  { name: 'Week 4', revenue: 2780, expenses: 3908, profit: 2000 },
];

const annualData = [
  { name: 'Q1', revenue: 14000, expenses: 8900, profit: 5100 },
  { name: 'Q2', revenue: 12000, expenses: 7398, profit: 4602 },
  { name: 'Q3', revenue: 15000, expenses: 9800, profit: 5200 },
  { name: 'Q4', revenue: 18780, expenses: 11908, profit: 6872 },
];

const ReportChart = ({ type }) => {
  const data = type === 'monthly' ? monthlyData : annualData;

  return (
    <ResponsiveContainer width="100%" height={400}>
      <ComposedChart data={data}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="revenue" fill="#3b82f6" />
        <Bar dataKey="expenses" fill="#ef4444" />
        <Line type="monotone" dataKey="profit" stroke="#22c55e" />
      </ComposedChart>
    </ResponsiveContainer>
  );
};

export default ReportChart;