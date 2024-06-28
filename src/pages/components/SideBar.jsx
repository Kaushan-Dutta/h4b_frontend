import React from 'react';
import { Link } from 'react-router-dom';
import { RouteLinks } from '../../../routes.config';
import { useAuth } from '../../context/AuthContext';
import { useLocation } from 'react-router-dom';
import Logo from '../Logo';

const SideBar = () => {
  const { auth } = useAuth();
  const {pathname}=useLocation()

  console.log("Auth",auth);
  return (
    <div className='w-52  border-2 flex flex-col  h-screen py-5 '>
      <div className='h-2/3 flex-col flex gap-7'>
      <div className='px-5'>
      <Logo/>
      </div>
      <ul className='flex flex-col  w-full'>
        {RouteLinks.map((route, index) => (
          route.feature === 'Dashboard' && auth?.role==(route.entity[0]) && route.sublinks && route.sublinks.length > 0 && (
            route.sublinks.map((sublink, index) => (
              (sublink.title && <li key={index}>
                <div className={`hover:border-[1px] ${(pathname.includes(sublink.path) && sublink.path!='')?'bg-light':'' }  w-full py-4`}><Link to={sublink.path} className='px-5'>{sublink.title}</Link></div>
              </li>)
            )
          )
        )))}
      </ul>
      </div>
      <div className='fixed bottom-0 py-3 px-5 flex-col flex gap-5 '>
        <button className='bg-imp text-white py-2 rounded-md w-40' onClick={()=>{
          localStorage.removeItem('token')
          window.location.href='/'
        }}>Logout</button>
      </div>
    </div>
  );
}

export default SideBar;
