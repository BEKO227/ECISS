import React, { useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './CustomHeader.css';

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
      <div ref={headerRef} className="header">
        <div className="header-top">
          <img
            src="https://bopjscwcrtsksrdtmfaz.supabase.co/storage/v1/object/sign/logos/black_bg-removebg-preview.png?token=eyJraWQiOiJzdG9yYWdlLXVybC1zaWduaW5nLWtleV9jYzg5MTUzMS1jYzk3LTQzNDktOTU4ZC1mZWIyZGFhNWI4OGQiLCJhbGciOiJIUzI1NiJ9.eyJ1cmwiOiJsb2dvcy9ibGFja19iZy1yZW1vdmViZy1wcmV2aWV3LnBuZyIsImlhdCI6MTc0OTM5MzAwMiwiZXhwIjozMzI4NTM5MzAwMn0.XskV--KJ3zXMN5X6Iglxji3nxCKCl-ns7gE20456PRY"
            alt="ECISS Logo"
            className="logo"
          />
          <div>
            <h1 className="header-text">
              Egyptian Company for Industrial & Scientific Services
            </h1>
            <span className="sub-text">
              الشركة المصرية للخدمات العلمية الصناعية
            </span>
          </div>
        </div>

        <nav className="navbar">
          {[
            { name: 'Home', path: '/' },
            { name: 'About', path: '/about' },
            { name: 'Services', path: '/services' },
            { name: 'Contact', path: '/contact' },
          ].map(({ name, path }) => (
            <Link
              key={name}
              to={path}
              className={`nav-text ${
                location.pathname === path ? 'active-link' : ''
              }`}
            >
              {name}
            </Link>
          ))}
        </nav>
      </div>
      <div style={{ marginTop: '160px' }}></div>
    </>
  );
}
