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
        boxShadow: scrolled ? '0 2px 6px rgba(0,0,0,0.1)' : 'none'
      }}
    >
      {isMobile && (
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          style={{
            ...styles.hamburger,
            color: scrolled ? 'black' : 'white'
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
        style={styles.navLinks}
      >
        <li><Link href="/" onClick={() => setMenuOpen(false)}>Home</Link></li>
        <li><Link href="/#about" onClick={() => setMenuOpen(false)}>About</Link></li>
        <li><Link href="/#history" onClick={() => setMenuOpen(false)}>History</Link></li>
        <li><Link href="/#awards" onClick={() => setMenuOpen(false)}>Awards</Link></li>
        <li><Link href="/#contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
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
          font-weight: 600;
          font-size: 1.2rem;
          transition: color 0.3s ease;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.1);
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
          top: 60px;
          left: 0;
          width: 100%;
          background: rgba(0, 0, 0, 0.85);
          padding: 20px 0;
          gap: 20px;
          align-items: center;
          z-index: 1000;
        }
        ul.mobile-open a {
          color: white;
          font-size: 1.2rem;
          font-weight: 600;
          text-shadow: 1px 1px 2px rgba(0,0,0,0.8);
        }
        ul.mobile-open a:hover {
          color: #CC232E;
        }
        button {
          position: absolute;
          right: 20px;
          top: 20px;
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
  },
  hamburger: {
    position: 'absolute' as const,
    right: 20,
    top: 20,
    fontSize: 24,
    background: 'none',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1100,
  },
};
