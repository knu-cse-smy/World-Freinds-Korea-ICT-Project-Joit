import React from 'react';
import logo from "../assets/logo.svg";

const Footer = () => {
  return (
    <footer style={{
      backgroundColor: 'white',
      color: '#374151',
      padding: '32px 0',
      textAlign: 'center'
    }}>
      <div style={{
        maxWidth: '1152px',
        margin: '0 auto',
        padding: '0 16px'
      }}>
        {/* Logo and Title */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '32px'
        }}>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '12px'
          }}>
            <div style={{
              width: '48px',
              height: '48px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}>
              <img 
              src={logo} 
              alt="Jo:it Logo" 
              style={{
                width: '32px',
                height: '32px'
              }} 
/>
            </div>
            <h1 style={{
              fontSize: '36px',
              fontWeight: 'bold',
              color: '#eab308',
              letterSpacing: '0.1em',
              margin: 0
            }}>JO : IT</h1>
          </div>
        </div>

        {/* Navigation Links */}
        <nav style={{ marginBottom: '32px' }}>
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '32px',
            marginBottom: '24px'
          }}>
            <a href="#" style={{
              color: '#4b5563',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Homepage</a>
            <a href="#" style={{
              color: '#4b5563',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Features</a>
            <a href="#" style={{
              color: '#4b5563',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Traffic Light</a>
            <a href="#" style={{
              color: '#4b5563',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Video</a>
            <a href="#" style={{
              color: '#4b5563',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>About Us</a>
          </div>
          
          <div style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '24px',
            fontSize: '14px'
          }}>
            <a href="#" style={{
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Terms & conditions</a>
            <a href="#" style={{
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Privacy policy</a>
            <a href="#" style={{
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Contact</a>
            <a href="#" style={{
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Cookie policy</a>
            <a href="#" style={{
              color: '#6b7280',
              textDecoration: 'none',
              transition: 'color 0.3s'
            }}>Support</a>
          </div>
        </nav>

        {/* Group Member Section */}
        <div style={{
          textAlign: 'center',
          marginBottom: '24px'
        }}>
          <h3 style={{
            color: '#4b5563',
            fontSize: '18px',
            margin: '0 0 16px 0'
            }}>Group Member</h3>
          
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1fr',
            gap: '8px',
            maxWidth: '600px',
            margin: '0 auto'
            }}>
              {[
                'Kim Mina',
                'Aisyah Hamda',
                'Sim Seyun',
                "M. Anang Ma'ruf",
                'Son Minyeong',
                'M. Adib Maulidan',
                'Noh Eunseo',
                'Ganendra Justin'
                
              ].map((member, index) => (
              <div key={index} style={{ 
                color: '#6b7280', 
                fontSize: '14px'
              }}>
                {member}
              </div>
        ))}
  </div>
</div>

        {/* Copyright */}
        <div style={{
          textAlign: 'center',
          color: '#6b7280',
          fontSize: '14px'
        }}>
          <p style={{ marginBottom: '4px' }}>© 2025 Jo : IT All rights reserved.</p>
          <p style={{ margin: 0 }}>Developed by Team 4 – Jo IT : KNU x POLIJE .</p>
        </div>
      </div>
    </footer>
  );
};

export default function AboutUs() {
  return (
    <div className='text-center'>
      <Footer />
    </div>
  );
}