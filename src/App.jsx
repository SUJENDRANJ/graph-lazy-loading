import React, { Suspense } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';

// Lazy load components
const Dashboard = React.lazy(() => import('./pages/Dashboard'));
const Analytics = React.lazy(() => import('./pages/Analytics'));
const Reports = React.lazy(() => import('./pages/Reports'));
const SettingsPage = React.lazy(() => import('./pages/Settings'));

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="animate-pulse p-4 md:p-6">
    <div className="h-8 bg-gray-200 rounded w-1/4 mb-6"></div>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {[1, 2, 3].map((n) => (
        <div key={n} className="h-48 bg-gray-200 rounded"></div>
      ))}
    </div>
  </div>
);

function App() {
  return (
    <BrowserRouter>
      <div className="flex flex-col lg:flex-row min-h-screen bg-gray-100">
        <Sidebar />
        
        <main className="flex-1 w-full lg:w-auto p-4 pt-16 lg:pt-4">
          <Suspense fallback={<SkeletonLoader />}>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/analytics" element={<Analytics />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/settings" element={<SettingsPage />} />
            </Routes>
          </Suspense>
        </main>
      </div>
    </BrowserRouter>
  );
}

export default App;