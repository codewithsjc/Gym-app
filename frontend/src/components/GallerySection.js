import React from 'react';

const GallerySection = () => {
  const galleryImages = [
    {
      url: 'https://images.unsplash.com/photo-1540497077202-7c8a3999166f',
      alt: 'Spin bikes and cardio equipment'
    },
    {
      url: 'https://images.unsplash.com/photo-1590487988256-9ed24133863e',
      alt: 'Weight training equipment'
    },
    {
      url: 'https://images.unsplash.com/photo-1578874691223-64558a3ca096',
      alt: 'Treadmill cardio section'
    },
    {
      url: 'https://images.unsplash.com/photo-1623874106686-5be2b325c8f1',
      alt: 'Functional training area'
    },
    {
      url: 'https://images.pexels.com/photos/1954524/pexels-photo-1954524.jpeg',
      alt: 'Modern gym facility'
    },
    {
      url: 'https://images.pexels.com/photos/260352/pexels-photo-260352.jpeg',
      alt: 'Weight training area'
    },
    {
      url: 'https://images.pexels.com/photos/841130/pexels-photo-841130.jpeg',
      alt: 'Strength training session'
    },
    {
      url: 'https://images.pexels.com/photos/2780762/pexels-photo-2780762.jpeg',
      alt: 'Gym workout floor'
    }
  ];

  return (
    <section id="gallery" style={{
      background: 'var(--secondary-olive)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            background: 'rgba(217, 251, 6, 0.1)',
            padding: '8px 16px',
            borderRadius: '100px',
            marginBottom: '20px'
          }}>
            <span className="caption" style={{ color: 'var(--brand-primary)' }}>GALLERY</span>
          </div>
          
          <h2 className="heading-1" style={{
            marginBottom: '20px',
            color: 'var(--brand-primary)'
          }}>
            EXPERIENCE OUR FACILITY
          </h2>

          <p className="body-medium" style={{
            color: 'var(--neutral-light)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Take a visual tour of our premium gym equipment and facilities.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '20px'
        }}>
          {galleryImages.map((image, index) => (
            <div 
              key={index}
              style={{
                position: 'relative',
                paddingBottom: '75%',
                overflow: 'hidden',
                borderRadius: '12px',
                border: '1px solid var(--border-light)',
                cursor: 'pointer',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'scale(1.02)';
                e.currentTarget.style.borderColor = 'var(--brand-primary)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1.1)';
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'scale(1)';
                e.currentTarget.style.borderColor = 'var(--border-light)';
                const img = e.currentTarget.querySelector('img');
                if (img) img.style.transform = 'scale(1)';
              }}
            >
              <img 
                src={image.url}
                alt={image.alt}
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  transition: 'transform 0.3s ease'
                }}
              />
              <div style={{
                position: 'absolute',
                inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.5), transparent)',
                opacity: 0,
                transition: 'opacity 0.3s ease'
              }}
              onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
              onMouseLeave={(e) => e.currentTarget.style.opacity = '0'}
              />
            </div>
          ))}
        </div>

        <div style={{
          marginTop: '60px',
          textAlign: 'center',
          padding: '40px',
          background: 'var(--bg-page)',
          borderRadius: '12px',
          border: '1px solid var(--border-light)'
        }}>
          <p className="body-medium" style={{ color: 'var(--neutral-light)', marginBottom: '24px' }}>
            Visit us to experience the difference in person
          </p>
          <a href="tel:+916002935282" className="btn-primary">
            Schedule Your Visit
          </a>
        </div>
      </div>
    </section>
  );
};

export default GallerySection;