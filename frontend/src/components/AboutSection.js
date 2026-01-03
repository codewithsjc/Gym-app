import React from 'react';
import { Award, Users, Heart, Target } from 'lucide-react';

const AboutSection = () => {
  return (
    <section id="about" style={{
      background: 'var(--bg-page)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px',
          alignItems: 'center'
        }}>
          <div>
            <div style={{
              display: 'inline-block',
              background: 'var(--secondary-olive)',
              padding: '8px 16px',
              borderRadius: '100px',
              marginBottom: '20px'
            }}>
              <span className="caption" style={{ color: 'var(--brand-primary)' }}>ABOUT US</span>
            </div>
            
            <h2 className="heading-1" style={{
              marginBottom: '24px',
              color: 'var(--brand-primary)'
            }}>
              SCULPT SQUAD GYM
            </h2>

            <p className="body-medium" style={{
              marginBottom: '20px',
              color: 'var(--neutral-light)'
            }}>
              Located in the heart of Guwahati on Zoo Road, Sculpt Squad Gym has established 
              itself as the city's premier fitness destination.
            </p>

            <p className="body-small" style={{
              marginBottom: '32px',
              color: 'var(--text-secondary)'
            }}>
              With a 4.8-star Google rating and 75+ positive reviews, we pride ourselves on 
              delivering a premium fitness experience. Our gym features best-in-class equipment, 
              maintains exceptional hygiene standards, and fosters a welcoming community where 
              members achieve real results.
            </p>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              padding: '20px',
              background: 'rgba(217, 251, 6, 0.05)',
              border: '1px solid var(--border-light)',
              borderRadius: '12px'
            }}>
              <Award size={32} color="var(--brand-primary)" />
              <div>
                <div style={{ fontWeight: 600, color: 'var(--brand-primary)' }}>Trusted Excellence</div>
                <div className="body-small">1+ year member retention rate</div>
              </div>
            </div>
          </div>

          <div style={{
            display: 'grid',
            gap: '20px'
          }}>
            <div style={{
              background: 'var(--bg-card)',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--brand-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-light)';
            }}>
              <Users size={32} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
              <h3 className="heading-3" style={{ marginBottom: '12px', color: 'var(--brand-primary)' }}>
                Professional Trainers
              </h3>
              <p className="body-small">
                Expert guidance from certified trainers who are friendly, knowledgeable, 
                and committed to your success.
              </p>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--brand-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-light)';
            }}>
              <Heart size={32} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
              <h3 className="heading-3" style={{ marginBottom: '12px', color: 'var(--brand-primary)' }}>
                Clean & Hygienic
              </h3>
              <p className="body-small">
                Impeccably maintained facility with spotless equipment and clean restrooms. 
                Your health and safety are our priority.
              </p>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              transition: 'transform 0.3s ease, border-color 0.3s ease'
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.borderColor = 'var(--brand-primary)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.borderColor = 'var(--border-light)';
            }}>
              <Target size={32} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
              <h3 className="heading-3" style={{ marginBottom: '12px', color: 'var(--brand-primary)' }}>
                Results-Driven
              </h3>
              <p className="body-small">
                Proven track record of helping members achieve their fitness goals through 
                structured programs and consistent support.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;