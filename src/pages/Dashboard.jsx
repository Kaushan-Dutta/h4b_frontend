import React from 'react';
import GoBack from './components/GoBack';

const Dashboard = () => {
  const user = {
    name: 'Name: John Doe',
    email: 'Email Id: admin@gmail.com',
    bio: 'Member since 6th September, 2021',
    avatarUrl: 'https://via.placeholder.com/150' 
  };

  return (
    <div className="p-5 w-10/12 mx-auto">
      <GoBack />
      
      <div className="mt-12 w-full bg-gray-100 shadow-lg rounded-lg p-8">
        <h1 className="text-3xl font-bold text-gray-800 mb-6">User Details</h1>
        
        <div className="flex items-center">
          <img
            className="w-36 h-36 rounded-full shadow-md mr-8"
            src={user.avatarUrl}
            alt={user.name}
          />
          
          <div className="text-left">
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-lg text-gray-600">{user.email}</p>
            <p className="text-md text-gray-500">{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
