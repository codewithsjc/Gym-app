import React from 'react';
import { MapPin, Phone, Mail } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer style={{
      background: 'var(--secondary-olive)',
      borderTop: '1px solid var(--border-medium)',
      padding: '80px 0 32px'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
          gap: '60px',
          marginBottom: '60px'
        }}>
          {/* Brand Section */}
          <div>
            <h3 className="heading-3" style={{ 
              color: 'var(--brand-primary)',
              marginBottom: '16px'
            }}>
              SCULPT SQUAD GYM
            </h3>
            <p className="body-small" style={{ 
              color: 'var(--text-secondary)',
              marginBottom: '20px'
            }}>
              Guwahati's premier fitness destination for those who demand excellence.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginTop: '16px' }}>
              <span style={{ color: 'var(--brand-primary)' }}>⭐</span>
              <span style={{ color: 'var(--neutral-white)', fontWeight: 600 }}>4.8/5</span>
              <span className="body-small" style={{ color: 'var(--text-secondary)' }}>(75 Reviews)</span>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="heading-3" style={{ 
              color: 'var(--brand-primary)',
              marginBottom: '16px',
              fontSize: '1.2rem'
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              <li style={{ marginBottom: '12px' }}>
                <button onClick={() => scrollToSection('about')} style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                  About Us
                </button>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <button onClick={() => scrollToSection('facilities')} style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                  Facilities
                </button>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <button onClick={() => scrollToSection('reviews')} style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                  Reviews
                </button>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <button onClick={() => scrollToSection('gallery')} style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                  Gallery
                </button>
              </li>
              <li style={{ marginBottom: '12px' }}>
                <button onClick={() => scrollToSection('contact')} style={{
                  background: 'none',
                  border: 'none',
                  color: 'var(--text-secondary)',
                  cursor: 'pointer',
                  fontSize: '1rem',
                  padding: 0,
                  transition: 'color 0.3s ease'
                }}
                onMouseEnter={(e) => e.target.style.color = 'var(--brand-primary)'}
                onMouseLeave={(e) => e.target.style.color = 'var(--text-secondary)'}>
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="heading-3" style={{ 
              color: 'var(--brand-primary)',
              marginBottom: '16px',
              fontSize: '1.2rem'
            }}>
              Contact Info
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                <MapPin size={20} color="var(--brand-primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  5th Floor, Chitrabon Enclave,<br />
                  Zoo Road, Guwahati, Assam – 781003
                </div>
              </div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <Phone size={20} color="var(--brand-primary)" style={{ flexShrink: 0 }} />
                <a href="tel:+916002935282" className="body-small" style={{ 
                  color: 'var(--brand-primary)',
                  textDecoration: 'none',
                  fontWeight: 600
                }}>
                  +91 60029 35282
                </a>
              </div>
            </div>
          </div>

          {/* Hours */}
          <div>
            <h4 className="heading-3" style={{ 
              color: 'var(--brand-primary)',
              marginBottom: '16px',
              fontSize: '1.2rem'
            }}>
              Opening Hours
            </h4>
            <div className="body-small" style={{ color: 'var(--text-secondary)' }}>
              <strong style={{ color: 'var(--brand-primary)', display: 'block', marginBottom: '8px' }}>
                Open Daily
              </strong>
              Closes at 11:30 PM
              <div style={{ marginTop: '16px', fontStyle: 'italic' }}>
                Flexible hours to match your lifestyle
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '32px',
          borderTop: '1px solid var(--border-light)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '20px'
        }}>
          <p className="body-small" style={{ color: 'var(--text-secondary)', margin: 0 }}>
            © 2025 Sculpt Squad Gym. All rights reserved.
          </p>
          <button onClick={scrollToTop} className="btn-secondary" style={{ padding: '0.8em 1.5em' }}>
            Back to Top
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;