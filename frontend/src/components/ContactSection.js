import React, { useState } from 'react';
import { MapPin, Phone, Clock, Mail, Send } from 'lucide-react';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Mock form submission - in production this would send to backend
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', phone: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" style={{
      background: 'var(--bg-page)',
      padding: '120px 0'
    }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <div style={{
            display: 'inline-block',
            background: 'var(--secondary-olive)',
            padding: '8px 16px',
            borderRadius: '100px',
            marginBottom: '20px'
          }}>
            <span className="caption" style={{ color: 'var(--brand-primary)' }}>GET IN TOUCH</span>
          </div>
          
          <h2 className="heading-1" style={{
            marginBottom: '20px',
            color: 'var(--brand-primary)'
          }}>
            VISIT US TODAY
          </h2>

          <p className="body-medium" style={{
            color: 'var(--neutral-light)',
            maxWidth: '600px',
            margin: '0 auto'
          }}>
            Located in the heart of Guwahati on Zoo Road. Come experience the difference.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '60px'
        }}>
          {/* Contact Info */}
          <div>
            <div style={{
              background: 'var(--bg-card)',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              marginBottom: '24px'
            }}>
              <MapPin size={32} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
              <h3 className="heading-3" style={{ marginBottom: '12px', color: 'var(--brand-primary)' }}>
                Address
              </h3>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                5th Floor, Chitrabon Enclave<br />
                Zoo Road, Sarania Hills<br />
                Guwahati, Assam – 781003<br />
                <strong style={{ color: 'var(--brand-primary)', marginTop: '8px', display: 'block' }}>
                  Plus Code: 5QHG+65
                </strong>
              </p>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)',
              marginBottom: '24px'
            }}>
              <Phone size={32} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
              <h3 className="heading-3" style={{ marginBottom: '12px', color: 'var(--brand-primary)' }}>
                Phone
              </h3>
              <a href="tel:+916002935282" className="body-small" style={{ 
                color: 'var(--brand-primary)',
                textDecoration: 'none',
                display: 'block',
                marginBottom: '8px',
                fontSize: '1.1rem',
                fontWeight: 600
              }}>
                +91 60029 35282
              </a>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                Call us for membership inquiries
              </p>
            </div>

            <div style={{
              background: 'var(--bg-card)',
              padding: '32px',
              borderRadius: '12px',
              border: '1px solid var(--border-light)'
            }}>
              <Clock size={32} color="var(--brand-primary)" style={{ marginBottom: '16px' }} />
              <h3 className="heading-3" style={{ marginBottom: '12px', color: 'var(--brand-primary)' }}>
                Opening Hours
              </h3>
              <p className="body-small" style={{ color: 'var(--text-secondary)' }}>
                <strong style={{ color: 'var(--brand-primary)' }}>Open Daily</strong><br />
                Closes at 11:30 PM<br />
                <span style={{ marginTop: '8px', display: 'block', fontStyle: 'italic' }}>
                  Flexible hours to fit your schedule
                </span>
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div style={{
            background: 'var(--bg-card)',
            padding: '40px',
            borderRadius: '12px',
            border: '1px solid var(--border-light)'
          }}>
            <h3 className="heading-3" style={{ marginBottom: '24px', color: 'var(--brand-primary)' }}>
              Send Us a Message
            </h3>

            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: '20px' }}>
                <label className="body-small" style={{ 
                  display: 'block',
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label className="body-small" style={{ 
                  display: 'block',
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  Phone *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>

              <div style={{ marginBottom: '20px' }}>
                <label className="body-small" style={{ 
                  display: 'block',
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    transition: 'border-color 0.3s ease'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>

              <div style={{ marginBottom: '24px' }}>
                <label className="body-small" style={{ 
                  display: 'block',
                  marginBottom: '8px',
                  color: 'var(--text-primary)'
                }}>
                  Message
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  style={{
                    width: '100%',
                    padding: '12px 16px',
                    background: 'var(--bg-page)',
                    border: '1px solid var(--border-light)',
                    borderRadius: '8px',
                    color: 'var(--text-primary)',
                    fontSize: '1rem',
                    resize: 'vertical',
                    transition: 'border-color 0.3s ease',
                    fontFamily: 'inherit'
                  }}
                  onFocus={(e) => e.target.style.borderColor = 'var(--brand-primary)'}
                  onBlur={(e) => e.target.style.borderColor = 'var(--border-light)'}
                />
              </div>

              {submitted && (
                <div style={{
                  background: 'rgba(217, 251, 6, 0.1)',
                  border: '1px solid var(--brand-primary)',
                  padding: '12px 16px',
                  borderRadius: '8px',
                  marginBottom: '16px',
                  color: 'var(--brand-primary)',
                  textAlign: 'center'
                }}>
                  Thank you! We'll get back to you soon.
                </div>
              )}

              <button type="submit" className="btn-primary" style={{
                width: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '8px'
              }}>
                <Send size={18} />
                Send Message
              </button>
            </form>
          </div>
        </div>

        {/* Google Maps Embed */}
        <div style={{
          marginTop: '60px',
          borderRadius: '12px',
          overflow: 'hidden',
          border: '1px solid var(--border-light)',
          height: '450px'
        }}>
          <iframe
            title="Sculpt Squad Gym Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3581.5678!2d91.77512!3d26.17812!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjbCsDEwJzQxLjIiTiA5McKwNDYnMzAuNCJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactSection;