import React from 'react';
import { ArrowRight, Phone } from 'lucide-react';

const CTASection = () => {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section style={{
      background: 'var(--bg-page)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden'
    }}>
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '800px',
        background: 'radial-gradient(circle, rgba(217, 251, 6, 0.1), transparent)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{
          textAlign: 'center',
          maxWidth: '900px',
          margin: '0 auto',
          padding: '80px 40px',
          background: 'var(--secondary-olive)',
          borderRadius: '20px',
          border: '2px solid var(--brand-primary)'
        }}>
          <h2 className="heading-1" style={{
            marginBottom: '24px',
            color: 'var(--brand-primary)',
            fontSize: 'clamp(2.5rem, 5vw, 5rem)'
          }}>
            START YOUR FITNESS JOURNEY TODAY
          </h2>

          <p className="body-large" style={{
            marginBottom: '40px',
            color: 'var(--neutral-light)',
            maxWidth: '700px',
            margin: '0 auto 40px'
          }}>
            Join Guwahati's premier gym and transform your body with expert guidance, 
            world-class equipment, and a supportive community.
          </p>

          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '20px',
            justifyContent: 'center',
            alignItems: 'center'
          }}>
            <button onClick={scrollToContact} className="btn-primary" style={{
              fontSize: '1.1rem',
              padding: '1.2em 2em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              Join Now
              <ArrowRight size={20} />
            </button>
            <a href="tel:+916002935282" className="btn-secondary" style={{
              fontSize: '1.1rem',
              padding: '1.2em 2em',
              display: 'flex',
              alignItems: 'center',
              gap: '10px'
            }}>
              <Phone size={20} />
              Call +91 60029 35282
            </a>
          </div>

          <div style={{
            marginTop: '60px',
            paddingTop: '40px',
            borderTop: '1px solid var(--border-light)'
          }}>
            <div style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              gap: '32px',
              flexWrap: 'wrap'
            }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--brand-primary)'
                }} />
                <span className="body-small" style={{ color: 'var(--neutral-light)' }}>Free Trial Available</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--brand-primary)'
                }} />
                <span className="body-small" style={{ color: 'var(--neutral-light)' }}>Expert Trainers</span>
              </div>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px'
              }}>
                <div style={{
                  width: '12px',
                  height: '12px',
                  borderRadius: '50%',
                  background: 'var(--brand-primary)'
                }} />
                <span className="body-small" style={{ color: 'var(--neutral-light)' }}>Premium Equipment</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;