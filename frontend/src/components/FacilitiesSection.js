import React from 'react';
import { Dumbbell, Heart, Wind, Sparkles, Users, Clock } from 'lucide-react';

const FacilitiesSection = () => {
  const facilities = [
    {
      icon: Dumbbell,
      title: 'Strength Training Zone',
      description: 'Premium free weights, resistance machines, and Olympic equipment for serious lifters.'
    },
    {
      icon: Heart,
      title: 'Cardio Excellence',
      description: '5 treadmills, 4 cross trainers, and 3-4 cycles - all modern equipment for optimal cardio workouts.'
    },
    {
      icon: Wind,
      title: 'Spacious Workout Floor',
      description: 'Generous space for functional training, stretching, and group activities.'
    },
    {
      icon: Sparkles,
      title: 'Clean Facilities',
      description: 'Spotless bathrooms, sanitized equipment, and maintained hygiene standards throughout.'
    },
    {
      icon: Users,
      title: 'Expert Trainers',
      description: 'Professional, certified trainers available to guide your fitness journey.'
    },
    {
      icon: Clock,
      title: 'Flexible Hours',
      description: 'Open daily until 11:30 PM to fit your schedule, morning or night.'
    }
  ];

  return (
    <section id="facilities" style={{
      background: 'var(--secondary-olive)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(217, 251, 6, 0.1)',
            padding: '8px 16px',
            borderRadius: '100px',
            marginBottom: '20px'
          }}>
            <span className="caption" style={{ color: 'var(--brand-primary)' }}>OUR FACILITIES</span>
          </div>
          
          <h2 className="heading-1" style={{
            marginBottom: '20px',
            color: 'var(--brand-primary)'
          }}>
            WORLD-CLASS EQUIPMENT & AMENITIES
          </h2>

          <p className="body-medium" style={{
            color: 'var(--neutral-light)'
          }}>
            Everything you need for an exceptional workout experience under one roof.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '32px'
        }}>
          {facilities.map((facility, index) => {
            const Icon = facility.icon;
            return (
              <div 
                key={index}
                style={{
                  background: 'rgba(26, 28, 27, 0.6)',
                  padding: '40px',
                  borderRadius: '12px',
                  border: '1px solid var(--border-light)',
                  transition: 'transform 0.3s ease, border-color 0.3s ease, background 0.3s ease'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'translateY(-4px)';
                  e.currentTarget.style.borderColor = 'var(--brand-primary)';
                  e.currentTarget.style.background = 'rgba(26, 28, 27, 0.9)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'translateY(0)';
                  e.currentTarget.style.borderColor = 'var(--border-light)';
                  e.currentTarget.style.background = 'rgba(26, 28, 27, 0.6)';
                }}
              >
                <Icon size={40} color="var(--brand-primary)" style={{ marginBottom: '20px' }} />
                <h3 className="heading-3" style={{ 
                  marginBottom: '12px', 
                  color: 'var(--brand-primary)'
                }}>
                  {facility.title}
                </h3>
                <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                  {facility.description}
                </p>
              </div>
            );
          })}
        </div>

        <div style={{
          marginTop: '80px',
          background: 'var(--bg-page)',
          padding: '60px',
          borderRadius: '12px',
          border: '1px solid var(--brand-primary)',
          textAlign: 'center'
        }}>
          <h3 className="heading-2" style={{ 
            marginBottom: '20px',
            color: 'var(--brand-primary)'
          }}>
            WHY MEMBERS CHOOSE SCULPT SQUAD
          </h3>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '40px',
            marginTop: '40px'
          }}>
            <div>
              <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>⭐ 4.8</div>
              <div className="body-small" style={{ color: 'var(--text-secondary)' }}>Google Rating</div>
            </div>
            <div>
              <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>75+</div>
              <div className="body-small" style={{ color: 'var(--text-secondary)' }}>Positive Reviews</div>
            </div>
            <div>
              <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>100%</div>
              <div className="body-small" style={{ color: 'var(--text-secondary)' }}>Premium Equipment</div>
            </div>
            <div>
              <div className="heading-2" style={{ color: 'var(--brand-primary)', marginBottom: '8px' }}>24/7</div>
              <div className="body-small" style={{ color: 'var(--text-secondary)' }}>Cleanliness Focus</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FacilitiesSection;