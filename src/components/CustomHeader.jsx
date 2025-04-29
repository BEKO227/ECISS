import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function CustomHeader() {
  const headerRef = useRef(null);
  const location = useLocation();

  useEffect(() => {
    if (headerRef.current) {
      headerRef.current.animate([{ opacity: 0 }, { opacity: 1 }], {
        duration: 1000,
        fill: 'forwards',
      });
    }
  }, []);

  return (
    <>
      <div ref={headerRef} style={styles.header}>
        <h1 style={styles.headerText}>
          ECISS الشركة المصرية للخدمات العلمية الصناعية
        </h1>
        <nav style={styles.navbar}>
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Contact', path: '/contact' },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              style={{
                ...styles.navText,
                ...(location.pathname === path ? styles.activeLink : {}),
              }}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>

      {/* Spacer to avoid content being hidden behind fixed header */}
      <div style={{ marginTop: '140px' }}></div>
    </>
  );
}

const styles = {
  header: {
    backgroundColor: '#1e1e2e',
    padding: '20px 15px',
    borderBottom: '2px solid #ffffff55',
    textAlign: 'center',
    position: 'fixed',
    top: 0,
    left: 0,
    width: '100%',
    zIndex: 1000,
  },
  headerText: {
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-evenly',
    backgroundColor: '#003366',
    padding: '10px',
    borderRadius: 10,
    flexWrap: 'wrap',
  },
  navText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 500,
    textDecoration: 'none',
    padding: '5px 10px',
    borderRadius: 4,
    transition: 'background 0.3s ease',
  },
  activeLink: {
    backgroundColor: '#1e90ff',
  },
};
