import React from 'react';
import { Save } from 'lucide-react';

const Settings = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-gray-800 mb-6">Settings</h1>
      
      <div className="bg-white p-6 rounded-lg shadow">
        <form className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Dashboard Theme
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Light</option>
              <option>Dark</option>
              <option>System</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Update Frequency
            </label>
            <select className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500">
              <option>Real-time</option>
              <option>Every 5 minutes</option>
              <option>Every 15 minutes</option>
              <option>Every hour</option>
            </select>
          </div>
          
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Email Notifications
            </label>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                <span className="ml-2">Daily summary</span>
              </label>
            </div>
            <div className="mt-2">
              <label className="inline-flex items-center">
                <input type="checkbox" className="rounded border-gray-300 text-blue-600 shadow-sm focus:border-blue-500 focus:ring-blue-500" />
                <span className="ml-2">Weekly reports</span>
              </label>
            </div>
          </div>
          
          <div>
            <button type="submit" className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
              <Save className="w-4 h-4 mr-2" />
              Save Settings
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Settings;