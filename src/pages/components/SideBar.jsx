import React from 'react';
import { Link } from 'react-router-dom';
import { RouteLinks } from '../../../routes.config';
import { useAuth } from '../../context/AuthContext';

const SideBar = () => {
  const { auth } = useAuth();
  console.log("Auth",auth);
  return (
    <div className='w-52  border-2 flex flex-col gap-5 h-screen py-5 relative'>
      <div className='h-2/3'>
      <div>
      <button className='p-3'>LOGO</button>
      </div>
      <ul className='flex flex-col  w-full'>
        {RouteLinks.map((route, index) => (
          route.feature === 'Dashboard' && auth?.role==(route.entity[0]) && route.sublinks && route.sublinks.length > 0 && (
            route.sublinks.map((sublink, index) => (
              (sublink.title && <li key={index}>
                <div className='hover:border-[1px] rounded-md  w-full py-4'><Link to={sublink.path} className='px-3'>{sublink.title}</Link></div>
              </li>)
            )
          )
        )))}
      </ul>
      </div>
      <div className='absolute bottom-0 p-3'>
        <p>{auth?.email}</p>
        <button className='' onClick={()=>{
          localStorage.removeItem('token')
          window.location.href='/'
        }}>Logout</button>
      </div>
    </div>
  );
}

export default SideBar;
