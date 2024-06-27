import React from 'react';
import { Link } from 'react-router-dom';
import { RouteLinks } from '../../../routes.config';
import { useAuth } from '../../context/AuthContext';

const SideBar = () => {
  const { auth } = useAuth();
  console.log("Auth",auth);
  return (
    <div>
      <ul>
        {RouteLinks.map((route, index) => (
          route.feature === 'Dashboard' && auth?.role==(route.entity[0]) && route.sublinks && route.sublinks.length > 0 && (
            route.sublinks.map((sublink, index) => (
              (sublink.title && <li key={index}>
                <Link to={sublink.path}>{sublink.title}</Link>
              </li>)
            )
          )
        )))}
      </ul>
    </div>
  );
}

export default SideBar;
