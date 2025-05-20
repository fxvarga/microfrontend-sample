import React from 'react';
import './LeftNav.css';
import { FiHome, FiGrid } from 'react-icons/fi';
import { NavLink } from 'react-router-dom';

const navItems = [
  { id: 'home', icon: <FiHome />, path: '/' },
  { id: 'workflow', icon: <FiGrid />, path: '/workflow' },
];

const LeftNav: React.FC = () => {
  return (
    <nav className="left-nav">
      {navItems.map(item => (
        <NavLink
          key={item.id}
          to={item.path}
          className={({ isActive }) =>
            `nav-item${isActive ? ' active' : ''}`
          }
        >
          {item.icon}
        </NavLink>
      ))}
    </nav>
  );
};

export default LeftNav;
