import React from 'react';
import GoBack from './components/GoBack';
import { useAuth } from '../context/AuthContext';

const Dashboard = () => {
  
  const {auth} = useAuth();
  return (
    <div className="p-5 w-3/4 ">
      <GoBack />
      
      <div className="mt-12 w-full bg-gray-100 rounded-xl p-5 border-2">
        
        <div className="flex items-center">
          <img
            className="w-20 h-20 rounded-full shadow-md mr-8"
            src=''
            alt=''
          />
          
          <div className="text-left">
            <p className="text-lg text-gray-600">{auth?.email}</p>
            <p className="text-md text-gray-500">{auth?.role}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;