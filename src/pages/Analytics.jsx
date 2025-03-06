import React, { Suspense } from 'react';
import { TrendingUp, Users, ShoppingCart } from 'lucide-react';

const AnalyticsChart = React.lazy(() => import('../components/charts/AnalyticsChart'));

const ChartLoader = () => (
  <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

const Analytics = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Analytics</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <TrendingUp className="w-10 h-10 text-blue-500" />
            <div className="ml-4">
              <p className="text-gray-500">Growth</p>
              <p className="text-2xl font-bold">+24.5%</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <Users className="w-10 h-10 text-green-500" />
            <div className="ml-4">
              <p className="text-gray-500">New Users</p>
              <p className="text-2xl font-bold">1,234</p>
            </div>
          </div>
        </div>
        
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center">
            <ShoppingCart className="w-10 h-10 text-purple-500" />
            <div className="ml-4">
              <p className="text-gray-500">Sales</p>
              <p className="text-2xl font-bold">$12,345</p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-lg font-semibold mb-4">Detailed Analytics</h2>
        <Suspense fallback={<ChartLoader />}>
          <AnalyticsChart />
        </Suspense>
      </div>
    </div>
  );
};

export default Analytics;