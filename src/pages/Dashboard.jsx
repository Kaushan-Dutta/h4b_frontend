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
    <div className="p-5 w-3/4 ">
      <GoBack />
      
      <div className="mt-12 w-full bg-gray-100 rounded-xl p-5 border-2">
        
        <div className="flex items-center">
          <img
            className="w-20 h-20 rounded-full shadow-md mr-8"
            src={user.avatarUrl}
            alt={user.name}
          />
          
          <div className="text-left">
            <p className="text-lg text-gray-600">{user.email}</p>
            <p className="text-md text-gray-500">{user.bio}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;