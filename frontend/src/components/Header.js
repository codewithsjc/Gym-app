import React, { useState } from 'react';
import { Phone, Menu, X } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <header style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      zIndex: 1000,
      background: 'rgba(26, 28, 27, 0.95)',
      backdropFilter: 'blur(10px)',
      borderBottom: '1px solid var(--border-light)'
    }}>
      <div className="container" style={{
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '20px 40px',
        maxWidth: '87.5rem',
        margin: '0 auto'
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
          <h1 className="heading-3" style={{ 
            color: 'var(--brand-primary)',
            margin: 0,
            fontSize: '1.5rem'
          }}>
            SCULPT SQUAD
          </h1>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '4px',
            fontSize: '0.9rem',
            color: 'var(--text-secondary)'
          }}>
            <span style={{ color: 'var(--brand-primary)' }}>⭐</span>
            <span style={{ color: 'var(--neutral-white)', fontWeight: 600 }}>4.8</span>
          </div>
        </div>

        {/* Desktop Navigation */}
        <nav style={{
          display: 'flex',
          gap: '32px',
          alignItems: 'center'
        }} className="desktop-nav">
          <button onClick={() => scrollToSection('about')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 500,
            transition: 'color 0.3s ease'
          }}>About</button>
          <button onClick={() => scrollToSection('facilities')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 500,
            transition: 'color 0.3s ease'
          }}>Facilities</button>
          <button onClick={() => scrollToSection('reviews')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 500,
            transition: 'color 0.3s ease'
          }}>Reviews</button>
          <button onClick={() => scrollToSection('gallery')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 500,
            transition: 'color 0.3s ease'
          }}>Gallery</button>
          <button onClick={() => scrollToSection('contact')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1rem',
            fontWeight: 500,
            transition: 'color 0.3s ease'
          }}>Contact</button>
          <a href="tel:+916002935282" className="btn-primary" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px'
          }}>
            <Phone size={18} />
            Call Now
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button 
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="mobile-menu-btn"
          style={{
            display: 'none',
            background: 'none',
            border: 'none',
            color: 'var(--brand-primary)',
            cursor: 'pointer'
          }}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="mobile-menu" style={{
          display: 'none',
          flexDirection: 'column',
          gap: '20px',
          padding: '20px 40px',
          background: 'var(--bg-page)',
          borderTop: '1px solid var(--border-light)'
        }}>
          <button onClick={() => scrollToSection('about')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1rem',
            textAlign: 'left',
            fontWeight: 500
          }}>About</button>
          <button onClick={() => scrollToSection('facilities')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1rem',
            textAlign: 'left',
            fontWeight: 500
          }}>Facilities</button>
          <button onClick={() => scrollToSection('reviews')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1rem',
            textAlign: 'left',
            fontWeight: 500
          }}>Reviews</button>
          <button onClick={() => scrollToSection('gallery')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1rem',
            textAlign: 'left',
            fontWeight: 500
          }}>Gallery</button>
          <button onClick={() => scrollToSection('contact')} style={{
            background: 'none',
            border: 'none',
            color: 'var(--text-primary)',
            cursor: 'pointer',
            fontSize: '1rem',
            textAlign: 'left',
            fontWeight: 500
          }}>Contact</button>
          <a href="tel:+916002935282" className="btn-primary" style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            justifyContent: 'center'
          }}>
            <Phone size={18} />
            Call Now
          </a>
        </div>
      )}

      <style>{`
        @media (max-width: 767px) {
          .desktop-nav {
            display: none !important;
          }
          .mobile-menu-btn {
            display: block !important;
          }
          .mobile-menu {
            display: flex !important;
          }
        }
      `}</style>
    </header>
  );
};

export default Header;