import React from 'react';

const MaintenanceMode = () => {
  const styles = `
    @keyframes bgBreath {
      0%, 100% { background-color: #f9f9f9; }
      50% { background-color: #f0f2f5; }
    }
    @keyframes batteryBlink {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.6; transform: scale(0.95); }
    }
    @keyframes floatText {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-8px); }
    }
    @keyframes slideIn {
      from { width: 0%; }
      to { width: 5%; }
    }
    .animate-bg { animation: bgBreath 8s ease-in-out infinite; }
    .animate-battery { animation: batteryBlink 1.5s ease-in-out infinite; }
    .animate-float { animation: floatText 4s ease-in-out infinite; }
    .animate-progress { animation: slideIn 2s ease-out forwards; }
  `;

  const containerStyle = {
    height: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: '"Segoe UI", Tahoma, Geneva, Verdana, sans-serif',
    textAlign: 'center',
    padding: '20px',
    transition: 'all 0.5s ease'
  };

  return (
    <div className="animate-bg" style={containerStyle}>
      <style>{styles}</style>

      {/* Animated Header */}
      <div className="animate-battery">
        <h1 style={{ fontSize: '3.5rem', color: '#ff4757', margin: 0 }}>
          🪫 5% Remaining...
        </h1>
      </div>
      
      {/* Animated Progress Bar */}
      <div style={{ 
        width: '300px', 
        height: '16px', 
        border: '2px solid #333', 
        borderRadius: '20px', 
        margin: '25px 0',
        overflow: 'hidden',
        backgroundColor: '#eee'
      }}>
        <div className="animate-progress" style={{ 
          height: '100%', 
          backgroundColor: '#ff4757', 
          borderRadius: '20px' 
        }}></div>
      </div>

      <div className="animate-float">
        <h2 style={{ color: '#2f3542', fontWeight: '600' }}>
          Our servers are on a "Coffee Break"
        </h2>
        
        <p style={{ maxWidth: '500px', color: '#57606f', lineHeight: '1.8', fontSize: '1.1rem' }}>
          It looks like the <strong>Digital Fuel Tank</strong> is running a bit dry! 
          To keep the pixels popping and the buttons clicking, we just need to 
          top up the "Subscription Credits."
        </p>

        <blockquote style={{ 
          fontStyle: 'italic', 
          color: '#747d8c', 
          marginTop: '30px',
          borderLeft: '4px solid #ff4757',
          paddingLeft: '15px',
          display: 'inline-block',
          textAlign: 'left'
        }}>
          "A website cannot live on code alone; it also needs <br/>
          a little bit of 'Invoice Love'."
        </blockquote>
      </div>

      <div style={{ 
        marginTop: '50px', 
        fontSize: '0.85rem', 
        color: '#a4b0be',
        letterSpacing: '1px'
      }}>
        STATUS: <span style={{ color: '#ffa502', fontWeight: 'bold' }}>WAITING FOR 'SEND' SIGNAL...</span>
      </div>
    </div>
  );
};

export default MaintenanceMode;