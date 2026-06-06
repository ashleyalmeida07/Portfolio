import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

export default function ThankYou() {
  const navigate = useNavigate();

  useEffect(() => {
    // Optional: Auto redirect to home after 5 seconds
    const timer = setTimeout(() => {
      navigate('/');
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <section className="thank-you" style={{
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      padding: '2rem'
    }}>
      <div className="container" style={{
        textAlign: 'center',
        maxWidth: '600px'
      }}>
        <div style={{
          backgroundColor: 'var(--bg-color, #f8f9fa)',
          padding: '3rem 2rem',
          borderRadius: '1rem',
          boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
        }}>
          <div style={{
            fontSize: '4rem',
            marginBottom: '1rem'
          }}>
            ✉️
          </div>
          <h1 style={{
            fontSize: '2.5rem',
            marginBottom: '1rem',
            color: 'var(--main-color, #6c63ff)'
          }}>
            Thank You for Reaching Out!
          </h1>
          <p style={{
            fontSize: '1.2rem',
            color: 'var(--text-color, #555)',
            marginBottom: '2rem',
            lineHeight: '1.8'
          }}>
            Your message has been successfully sent. I'll get back to you as soon as possible!
          </p>
          
          <div style={{
            display: 'flex',
            gap: '1rem',
            justifyContent: 'center',
            flexWrap: 'wrap'
          }}>
            <button
              onClick={() => navigate('/')}
              style={{
                padding: '0.85rem 2rem',
                backgroundColor: 'var(--main-color, #6c63ff)',
                color: '#fff',
                border: 'none',
                borderRadius: '2rem',
                fontSize: '1.05rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: '0.3s'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.9'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              Back to Home
            </button>
            
            <button
              onClick={() => navigate('/#contact')}
              style={{
                padding: '0.85rem 2rem',
                backgroundColor: 'transparent',
                color: 'var(--main-color, #6c63ff)',
                border: '2px solid var(--main-color, #6c63ff)',
                borderRadius: '2rem',
                fontSize: '1.05rem',
                fontWeight: 500,
                cursor: 'pointer',
                transition: '0.3s'
              }}
              onMouseOver={(e) => e.target.style.opacity = '0.7'}
              onMouseOut={(e) => e.target.style.opacity = '1'}
            >
              Send Another Message
            </button>
          </div>

          <p style={{
            marginTop: '2rem',
            fontSize: '0.9rem',
            color: 'var(--text-color-light, #999)'
          }}>
            Redirecting to home in 5 seconds...
          </p>
        </div>
      </div>
    </section>
  );
}