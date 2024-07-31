import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchNavbar } from '../actions/navbarActions';
import './Navbar.css';

const Navbar = () => {
  const dispatch = useDispatch();
  const navbar = useSelector((state) => state.navbar);

  useEffect(() => {
    dispatch(fetchNavbar());
  }, [dispatch]);

  // Check if navbar data is loaded
  if (!navbar.Tabs) {
    return <div>Loading...</div>; // Placeholder for loading state
  }

  return (
    <nav className="navbar">
      <ul className="navbar-tabs">
        {navbar.Tabs.length > 0 ? (
          navbar.Tabs.map((tab, index) => (
            <li key={index} className="navbar-tab">
              {tab.Title || 'Untitled'} {/* Handle cases where Title might be null */}
              <ul className="navbar-links">
                {tab.links && tab.links.length > 0 ? (
                  tab.links.map((link, linkIndex) => (
                    <li key={linkIndex} className="navbar-link">
                      <a href={link.URL} target="_blank" rel="noopener noreferrer">{link.Text}</a>
                    </li>
                  ))
                ) : (
                  <li className="navbar-link">No Links</li> // Placeholder for empty links
                )}
              </ul>
            </li>
          ))
        ) : (
          <li className="navbar-tab">No Tabs</li> // Placeholder for no tabs
        )}
      </ul>
    </nav>
  );
};

export default Navbar;
