import React from 'react';
import { Star, Quote } from 'lucide-react';

const ReviewsSection = () => {
  const reviews = [
    {
      name: 'Rahul Sharma',
      rating: 5,
      text: 'Best gym in Guwahati! The equipment is top-notch, and the trainers are incredibly supportive. The cleanliness and ambience make every workout session enjoyable.',
      date: '2 months ago'
    },
    {
      name: 'Priya Devi',
      rating: 5,
      text: 'I have been a member for over a year now, and I can confidently say this is the most well-maintained gym in the city. Professional staff and excellent facilities.',
      date: '3 months ago'
    },
    {
      name: 'Arjun Baruah',
      rating: 5,
      text: 'Premium gym experience at its finest. The cardio section is amazing with 5 treadmills and multiple cross trainers. Highly recommend for serious fitness enthusiasts.',
      date: '1 month ago'
    },
    {
      name: 'Ananya Das',
      rating: 5,
      text: 'Clean, hygienic, and well-equipped. The trainers are friendly and knowledgeable. Great community atmosphere that keeps me motivated every day.',
      date: '4 months ago'
    },
    {
      name: 'Vikram Singh',
      rating: 5,
      text: 'Excellent gym with modern equipment and a welcoming environment. The staff goes above and beyond to ensure members have the best experience.',
      date: '2 weeks ago'
    },
    {
      name: 'Ritu Goswami',
      rating: 4,
      text: 'Great gym on Zoo Road. The facilities are excellent and the trainers are very professional. Love the spacious workout area and clean bathrooms.',
      date: '1 month ago'
    }
  ];

  return (
    <section id="reviews" style={{
      background: 'var(--bg-page)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px', maxWidth: '800px', margin: '0 auto 60px' }}>
          <div style={{
            display: 'inline-block',
            background: 'var(--secondary-olive)',
            padding: '8px 16px',
            borderRadius: '100px',
            marginBottom: '20px'
          }}>
            <span className="caption" style={{ color: 'var(--brand-primary)' }}>MEMBER REVIEWS</span>
          </div>
          
          <h2 className="heading-1" style={{
            marginBottom: '20px',
            color: 'var(--brand-primary)'
          }}>
            HEAR FROM OUR MEMBERS
          </h2>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '12px',
            marginTop: '24px'
          }}>
            <div style={{ display: 'flex', gap: '4px' }}>
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} size={24} fill="var(--brand-primary)" color="var(--brand-primary)" />
              ))}
            </div>
            <span className="body-medium" style={{ color: 'var(--brand-primary)', fontWeight: 700 }}>4.8</span>
            <span className="body-small" style={{ color: 'var(--text-secondary)' }}>(75 Google Reviews)</span>
          </div>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))',
          gap: '32px'
        }}>
          {reviews.map((review, index) => (
            <div 
              key={index}
              style={{
                background: 'var(--bg-card)',
                padding: '32px',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                transition: 'transform 0.3s ease, border-color 0.3s ease',
                position: 'relative'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-4px)';
                e.currentTarget.style.borderColor = 'var(--brand-primary)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
              }}
            >
              <Quote size={32} color="var(--brand-primary)" style={{ opacity: 0.3, marginBottom: '16px' }} />
              
              <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} fill="var(--brand-primary)" color="var(--brand-primary)" />
                ))}
              </div>

              <p className="body-small" style={{
                marginBottom: '20px',
                color: 'var(--neutral-light)',
                lineHeight: '1.6'
              }}>
                {review.text}
              </p>

              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingTop: '20px',
                borderTop: '1px solid var(--border-light)'
              }}>
                <div>
                  <div style={{ fontWeight: 600, color: 'var(--brand-primary)', marginBottom: '4px' }}>
                    {review.name}
                  </div>
                  <div className="caption" style={{ color: 'var(--text-secondary)' }}>
                    {review.date}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          padding: '40px',
          background: 'rgba(217, 251, 6, 0.05)',
          border: '1px solid var(--brand-primary)',
          borderRadius: '12px'
        }}>
          <h3 className="heading-3" style={{ 
            marginBottom: '16px',
            color: 'var(--brand-primary)'
          }}>
            Join Our Trusted Community
          </h3>
          <p className="body-small" style={{ color: 'var(--text-secondary)', marginBottom: '24px' }}>
            See why we're the highest-rated gym in Guwahati
          </p>
          <a 
            href="https://www.google.com/maps/search/?api=1&query=Sculpt+Squad+Gym+Zoo+Road+Guwahati"
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Read More Reviews on Google
          </a>
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;