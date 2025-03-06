import React, { Suspense } from 'react';
import { FileText } from 'lucide-react';

const ReportChart = React.lazy(() => import('../components/charts/ReportChart'));

const ChartLoader = () => (
  <div className="flex items-center justify-center h-64 bg-gray-50 rounded-lg">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
  </div>
);

const Reports = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Reports</h1>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <FileText className="w-5 h-5 text-blue-500 mr-2" />
            <h2 className="text-lg font-semibold">Monthly Report</h2>
          </div>
          <Suspense fallback={<ChartLoader />}>
            <ReportChart type="monthly" />
          </Suspense>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center mb-4">
            <FileText className="w-5 h-5 text-green-500 mr-2" />
            <h2 className="text-lg font-semibold">Annual Report</h2>
          </div>
          <Suspense fallback={<ChartLoader />}>
            <ReportChart type="annual" />
          </Suspense>
        </div>
      </div>
    </div>
  );
};

export default Reports;