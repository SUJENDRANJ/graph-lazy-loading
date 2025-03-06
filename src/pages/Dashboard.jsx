import React, { Suspense } from 'react';
import { LineChart, BarChart3, PieChart } from 'lucide-react';

const RevenueChart = React.lazy(() => import('../components/charts/RevenueChart'));
const UserActivityChart = React.lazy(() => import('../components/charts/UserActivityChart'));
const ConversionChart = React.lazy(() => import('../components/charts/ConversionChart'));

const ChartLoader = () => (
  <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <h1 className="text-xl md:text-2xl font-bold text-gray-800">Dashboard Overview</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
        <div className="bg-white p-4 md:p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <LineChart className="w-5 h-5 text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold">Revenue</h2>
          </div>
          <Suspense fallback={<ChartLoader />}>
            <RevenueChart />
          </Suspense>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <BarChart3 className="w-5 h-5 text-green-500 mr-2" />
            <h2 className="text-lg font-semibold">User Activity</h2>
          </div>
          <Suspense fallback={<ChartLoader />}>
            <UserActivityChart />
          </Suspense>
        </div>

        <div className="bg-white p-4 md:p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <PieChart className="w-5 h-5 text-purple-500 mr-2" />
            <h2 className="text-lg font-semibold">Conversion Rate</h2>
          </div>
          <Suspense fallback={<ChartLoader />}>
            <ConversionChart />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;