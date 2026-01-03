import React from 'react';
import { ArrowRight, Phone, Calendar } from 'lucide-react';

const HeroSection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Background Image */}
      <div style={{
        position: 'absolute',
        width: '100%',
        height: '100%',
        top: 0,
        left: 0,
        overflow: 'hidden'
      }}>
        <img 
          src="https://images.unsplash.com/photo-1758448756350-3d0eec02ba37"
          alt="Modern gym interior"
          style={{
            objectFit: 'cover',
            width: '100%',
            height: '100%',
            position: 'absolute',
            inset: 0
          }}
        />
        <div style={{
          opacity: 0.85,
          background: 'linear-gradient(135deg, #000, transparent)',
          width: '100%',
          height: '100%',
          position: 'absolute',
          top: 0
        }} />
      </div>

      {/* Content */}
      <div className="container" style={{
        position: 'relative',
        zIndex: 1,
        padding: '120px 40px 80px'
      }}>
        <div style={{ maxWidth: '800px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(217, 251, 6, 0.15)',
            border: '1px solid var(--brand-primary)',
            borderRadius: '100px',
            padding: '8px 20px',
            marginBottom: '24px'
          }}>
            <span className="caption" style={{ color: 'var(--brand-primary)' }}>
              ⭐ 4.8 Rating • 75 Google Reviews
            </span>
          </div>

          <h1 className="brand-display" style={{
            marginBottom: '24px',
            maxWidth: '15ch'
          }}>
            TRANSFORM YOUR BODY. TRAIN WITH THE BEST.
          </h1>

          <p className="body-medium" style={{
            marginBottom: '40px',
            maxWidth: '600px',
            color: 'var(--neutral-light)'
          }}>
            Guwahati's premier fitness destination with best-in-class equipment, 
            professional trainers, and a community that pushes you to achieve greatness.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '16px',
            alignItems: 'center'
          }}>
            <button onClick={scrollToContact} className="btn-primary" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              Join Now
              <ArrowRight size={18} />
            </button>
            <button onClick={scrollToContact} className="btn-secondary" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Calendar size={18} />
              Book Free Trial
            </button>
            <a href="tel:+916002935282" className="btn-secondary" style={{
              display: 'flex',
              alignItems: 'center',
              gap: '8px'
            }}>
              <Phone size={18} />
              +91 60029 35282
            </a>
          </div>

          <div style={{
            marginTop: '60px',
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
            gap: '32px',
            maxWidth: '600px'
          }}>
            <div>
              <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>5+</div>
              <div className="body-small" style={{ color: 'var(--text-secondary)' }}>Years of Excellence</div>
            </div>
            <div>
              <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>500+</div>
              <div className="body-small" style={{ color: 'var(--text-secondary)' }}>Active Members</div>
            </div>
            <div>
              <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>10+</div>
              <div className="body-small" style={{ color: 'var(--text-secondary)' }}>Expert Trainers</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;