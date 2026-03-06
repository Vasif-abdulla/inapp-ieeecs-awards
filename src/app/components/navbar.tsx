'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [notificationVisible, setNotificationVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    function handleResize() {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setMenuOpen(false);
      }
    }
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }, [menuOpen]);

  useEffect(() => {
    const checkNotificationBar = () => {
      const notificationBar = document.querySelector('[data-notification-bar]');
      setNotificationVisible(!!notificationBar);
    };

    checkNotificationBar();
    const observer = new MutationObserver(checkNotificationBar);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect();
  }, []);

  // Detect scroll to change navbar color
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };

    handleScroll();
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={scrolled ? 'scrolled' : ''}
      style={{
        ...styles.navbar,
        top: notificationVisible ? '50px' : '0px',
        backgroundColor: scrolled ? '#ffffff' : 'transparent',
        boxShadow: scrolled ? '0 2px 6px rgba(0,0,0,0.1)' : 'none',
        padding: isMobile ? '30px 30px' : '20px 30px',
      }}
    >
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            ...styles.hamburger,
            color: (scrolled || menuOpen) ? '#1a1a1a' : 'white'
          }}
          aria-label="Toggle menu"
        >
          {menuOpen ? '✖' : '☰'}
        </button>
      )}

      <ul
        className={
          isMobile
            ? menuOpen
              ? 'mobile-open'
              : 'mobile-closed'
            : 'desktop-menu'
        }
        style={{
          ...styles.navLinks,
          display: isMobile && !menuOpen ? 'none' : 'flex',
          flexDirection: isMobile ? 'column' : 'row',
          backgroundColor: isMobile ? '#ffffff' : 'transparent',
        }}
      >
        <li><Link href="/" onClick={() => setMenuOpen(false)} style={{ color: scrolled ? 'black' : 'white', fontWeight: '700', textDecoration: 'none' }}>Home</Link></li>
        <li><Link href="/#about" onClick={() => setMenuOpen(false)} style={{ color: scrolled ? 'black' : 'white', fontWeight: '700', textDecoration: 'none' }}>About</Link></li>
        <li><Link href="/#history" onClick={() => setMenuOpen(false)} style={{ color: scrolled ? 'black' : 'white', fontWeight: '700', textDecoration: 'none' }}>History</Link></li>
        <li><Link href="/#awards" onClick={() => setMenuOpen(false)} style={{ color: scrolled ? 'black' : 'white', fontWeight: '700', textDecoration: 'none' }}>Awards</Link></li>
        <li><Link href="/#contact" onClick={() => setMenuOpen(false)} style={{ color: scrolled ? 'black' : 'white', fontWeight: '700', textDecoration: 'none' }}>Contact</Link></li>
      </ul>

      <style jsx>{`
        ul {
          list-style: none;
          margin: 0;
          padding: 0;
          font-weight: 500;
          gap: 25px;
          display: flex;
          align-items: center;
        }
        ul.desktop-menu {
          flex-direction: row;
          position: static;
          background: transparent;
          width: auto;
          padding: 0;
        }
        ul.desktop-menu a {
          color: ${scrolled ? 'black' : 'white'};
          font-weight: 700;
          font-size: 1.2rem;
          transition: color 0.3s ease;
          text-shadow: ${scrolled ? 'none' : '2px 2px 4px rgba(0,0,0,0.3)'};
        }
        ul.desktop-menu a:hover {
          color: #CC232E;
        }
        ul.mobile-closed {
          display: none;
        }
        ul.mobile-open {
          display: flex;
          flex-direction: column;
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: auto;
          background: #ffffff;
          padding: 100px 0 40px 0;
          gap: 20px;
          align-items: center;
          z-index: 1000;
          box-shadow: 0 4px 20px rgba(0,0,0,0.1);
          border-bottom-left-radius: 20px;
          border-bottom-right-radius: 20px;
        }
        ul.mobile-open li:first-child {
          padding-top: 20px;
        }
        ul.mobile-open li:last-child {
          padding-bottom: 20px;
        }
        ul.mobile-open a {
          color: #1a1a1a;
          font-size: 1.2rem;
          font-weight: 600;
          text-shadow: none;
        }
        ul.mobile-open a:hover {
          color: #CC232E;
        }
        button {
          position: absolute;
          right: 20px;
          top: 0px;
          font-size: 24px;
          background: none;
          border: none;
          cursor: pointer;
          z-index: 1100;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.2);
        }
      `}</style>
    </nav>
  );
}

const styles = {
  navbar: {
    position: 'fixed' as const,
    top: '50px',
    left: 0,
    width: '100%',
    padding: '20px 30px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 1000,
    backdropFilter: 'blur(5px)',
    transition: 'all 0.3s ease',
  },
  navLinks: {
    listStyle: 'none',
    margin: 0,
    padding: 0,
    fontWeight: '500',
    gap: '25px',
    alignItems: 'center',
  },
  hamburger: {
    position: 'absolute' as const,
    right: 20,
    top: 10,
    fontSize: 24,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1100,
  },
};
