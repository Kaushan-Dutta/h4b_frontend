import React from 'react';
import { Card } from 'antd';
import GoBack from './components/GoBack';

const Dashboard = () => {
  const user = {
    name: 'John Doe',
    email: 'john.doe@example.com',
    bio: 'Software Developer at XYZ Company',
    avatarUrl: 'https://via.placeholder.com/150' // 
  };

  return (
    <div className="p-5 w-2/3 mx-auto">
      <GoBack />
      <Card 
        title="" 
        bordered={false} 
        className="mt-12 w-full bg-gray-100 shadow-lg rounded-lg p-8"
      >
        <div className="flex flex-col items-center">
          <img
            className="w-36 h-36 rounded-full shadow-md"
            src={user.avatarUrl}
            alt={user.name}
          />
          <div className="mt-5 text-center">
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-lg text-gray-600">{user.email}</p>
            <p className="text-md text-gray-500">{user.bio}</p>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default Dashboard;
