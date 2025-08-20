import React from 'react';
// import { fontStyles } from "./VideoSection";
import "../pages/Home.css"
import trafficlight from "../assets/features/trafficlight.png"
import sun from "../assets/features/uv.png"
import safetylight from "../assets/features/safetylight.png"

const FeatureCards = () => {
  const features = [
    {
      id: 1,
      title: "Traffic Light",
      description: "Change the traffic light signal before crossing the road",
      icon: trafficlight
    },
    {
      id: 2,
      title: "Umbrella",
      description: "enjoy your waiting with umbrella to protect you from the sun and rain",
      icon: sun
    },
    {
      id: 3,
      title: "Safety Light",
      description: "Change the traffic light signal before crossing the road",
      icon: safetylight
    }
  ];

  // const TrafficLightIcon = () => (
  //   <div className="traffic-light-container">
  //     <div className="traffic-light-body">
  //       <div className="traffic-light-signals">
  //         <div className="traffic-light red"></div>
  //         <div className="traffic-light yellow"></div>
  //         <div className="traffic-light green"></div>
  //       </div>
  //     </div>
  //     <div className="traffic-light-pole"></div>
  //     <div className="traffic-light-base"></div>
  //   </div>
  // );

  // const ShieldIcon = () => (
  //   <div className="shield-container">
  //     <div className="shield-outer">
  //       <div className="shield-middle">
  //         <div className="shield-inner">
  //           <div className="shield-center"></div>
  //         </div>
  //       </div>
  //     </div>
  //     <div className="shield-highlight-1"></div>
  //     <div className="shield-highlight-2"></div>
  //   </div>
  // );

  // const CoolerMistIcon = () => (
  //   <div className="cooler-container">
  //     <div className="cooler-body">
  //       <div className="cooler-tank"></div>
  //       <div className="cooler-controls">
  //         <div className="cooler-dot"></div>
  //         <div className="cooler-dot"></div>
  //         <div className="cooler-dot"></div>
  //       </div>
  //     </div>
  //     <div className="mist-effects">
  //       <div className="mist-1"></div>
  //       <div className="mist-2"></div>
  //       <div className="mist-3"></div>
  //     </div>
  //   </div>
  // );

  // const SafetyLightIcon = () => (
  //   <div className="safety-light-container">
  //     <div className="safety-pole"></div>
  //     <div className="safety-light-top">
  //       <div className="safety-bulb">
  //         <div className="bulb-center"></div>
  //       </div>
  //     </div>
  //     <div className="safety-light-bottom">
  //       <div className="safety-bulb">
  //         <div className="bulb-center"></div>
  //       </div>
  //     </div>
  //     <div className="safety-base"></div>
  //   </div>
  // );

  // const renderIcon = (iconType) => {
  //   switch (iconType) {
  //     case 'traffic-light':
  //       return <TrafficLightIcon />;
  //     case 'shield':
  //       return <ShieldIcon />;
  //     case 'cooler-mist':
  //       return <CoolerMistIcon />;
  //     case 'safety-light':
  //       return <SafetyLightIcon />;
  //     default:
  //       return null;
  //   }
  // };

  return (
    <>
      <style jsx>{`
        .container {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;
          gap: 20px;
          padding: 24px;
          background-color: #f8fafc;
          min-height: 100vh;
        }

        .feature-card {
          background-color: white;
          border-radius: 12px;
          border: 2px solid #facc15;
          padding: 24px;
          width: 256px;
          height: 256px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          text-align: center;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
          cursor: pointer;
          transition: all 0.4s ease;
          position: relative;
          overflow: hidden;
        }

        /* Gradient overlay that appears on hover */
        .feature-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, #ffd700 0%, #ffed4e 25%, #ff8c00 50%, #ff4500 75%, #000000 100%);
          opacity: 0;
          transition: opacity 0.4s ease;
          z-index: 1;
        }

        .feature-card:hover {
          box-shadow: 0 20px 25px -5px rgb(0 0 0 / 0.2);
          border-color: #000;
          transform: translateY(-8px);
        }

        .feature-card:hover::before {
          opacity: 1;
        }

        /* Card content wrapper to ensure it stays above gradient */
        .card-content {
          position: relative;
          z-index: 2;
          transition: all 0.4s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100%;
        }

        /* Change text color on hover */
        .feature-card:hover .card-content {
          color: white;
        }

        .feature-card:hover .card-title {
          color: white;
        }

        .feature-card:hover .card-description {
          color: rgba(255, 255, 255, 0.9);
        }

        /* Icon scaling and rotation effects on hover */
        .feature-card:hover .icon-container {
          transform: scale(1.1) rotate(5deg);
        }

        .icon-container {
          transition: transform 0.4s ease;
          margin-bottom: 12px;
        }

        /* Enhanced animations on hover */
        .feature-card:hover .traffic-light.red {
          animation: blink-red 1s infinite;
        }

        .feature-card:hover .traffic-light.yellow {
          animation: blink-yellow 1.2s infinite;
        }

        .feature-card:hover .traffic-light.green {
          animation: blink-green 0.8s infinite;
        }

        .feature-card:hover .shield-outer {
          animation: shield-glow 2s ease-in-out infinite;
        }

        .feature-card:hover .mist-1,
        .feature-card:hover .mist-2,
        .feature-card:hover .mist-3 {
          animation-duration: 1s;
        }

        .feature-card:hover .safety-bulb {
          animation: safety-pulse 1.5s ease-in-out infinite;
        }

        /* Animation keyframes */
        @keyframes blink-red {
          0%, 50% { opacity: 1; }
          51%, 100% { opacity: 0.3; }
        }

        @keyframes blink-yellow {
          0%, 60% { opacity: 1; }
          61%, 100% { opacity: 0.4; }
        }

        @keyframes blink-green {
          0%, 40% { opacity: 1; }
          41%, 100% { opacity: 0.5; }
        }

        @keyframes shield-glow {
          0%, 100% { 
            box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 20px rgba(253, 224, 71, 0.6);
            transform: scale(1.05);
          }
        }

        @keyframes safety-pulse {
          0%, 100% { 
            background-color: white;
            box-shadow: none;
          }
          50% { 
            background-color: #fef3c7;
            box-shadow: 0 0 10px rgba(254, 243, 199, 0.8);
          }
        }

        .card-title {
          font-size: 24px;
          font-weight: 600;
          color: #3b82f6;
          margin: 16px 0;
          transition: color 0.4s ease;
        }

        .card-description {
          font-size: 16px;
          color: #6b7280;
          line-height: 1.5;
          transition: color 0.4s ease;
        }

        .feature-icon {
          width: 80px;
          height: 80px;
          object-fit: contain;
          transition: filter 0.4s ease;
        }

        /* Brighten the image icons on hover for better visibility */
        .feature-card:hover .feature-icon {
          filter: brightness(1.2) contrast(1.1);
        }

        /* Traffic Light Styles */
        .traffic-light-container {
          position: relative;
          width: 80px;
          height: 100px;
          margin: 0 auto 16px;
        }

        .traffic-light-body {
          width: 40px;
          height: 80px;
          background-color: #1f2937;
          border-radius: 10px;
          margin: 0 auto;
        }

        .traffic-light-signals {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 6px 0;
          gap: 6px;
        }

        .traffic-light {
          width: 24px;
          height: 24px;
          border-radius: 50%;
        }

        .traffic-light.red {
          background-color: #ef4444;
        }

        .traffic-light.yellow {
          background-color: #fbbf24;
        }

        .traffic-light.green {
          background-color: #10b981;
        }

        .traffic-light-pole {
          position: absolute;
          bottom: -8px;
          left: 50%;
          transform: translateX(-50%);
          width: 4px;
          height: 16px;
          background-color: #4b5563;
        }

        .traffic-light-base {
          position: absolute;
          bottom: -4px;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 8px;
          background-color: #4b5563;
          border-radius: 4px;
        }

        /* Shield Styles */
        .shield-container {
          width: 64px;
          height: 64px;
          margin: 0 auto 12px;
          position: relative;
        }

        .shield-outer {
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #fde047 0%, #eab308 100%);
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);
        }

        .shield-middle {
          width: 48px;
          height: 48px;
          background-color: #fbbf24;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .shield-inner {
          width: 32px;
          height: 32px;
          background-color: #eab308;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .shield-center {
          width: 16px;
          height: 16px;
          background-color: #ca8a04;
          border-radius: 50%;
        }

        .shield-highlight-1 {
          position: absolute;
          top: 8px;
          left: 8px;
          width: 12px;
          height: 12px;
          background-color: #fef3c7;
          border-radius: 50%;
          opacity: 0.7;
        }

        .shield-highlight-2 {
          position: absolute;
          top: 16px;
          right: 12px;
          width: 8px;
          height: 8px;
          background-color: #fef3c7;
          border-radius: 50%;
          opacity: 0.5;
        }

        /* Cooler Mist Styles */
        .cooler-container {
          width: 64px;
          height: 64px;
          margin: 0 auto 12px;
          position: relative;
        }

        .cooler-body {
          width: 48px;
          height: 40px;
          background-color: white;
          border: 2px solid #93c5fd;
          border-radius: 8px;
          margin: 8px auto 0;
        }

        .cooler-tank {
          width: 32px;
          height: 24px;
          background-color: #dbeafe;
          border-radius: 4px;
          margin: 4px auto;
        }

        .cooler-controls {
          display: flex;
          justify-content: center;
          gap: 2px;
          margin-top: 4px;
        }

        .cooler-dot {
          width: 4px;
          height: 4px;
          background-color: #60a5fa;
          border-radius: 50%;
        }

        .mist-effects {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          display: flex;
          gap: 4px;
        }

        .mist-1, .mist-2, .mist-3 {
          width: 4px;
          background-color: #93c5fd;
          border-radius: 2px;
          animation: mist 2s ease-in-out infinite;
        }

        .mist-1 {
          height: 8px;
          opacity: 0.6;
          animation-delay: 0s;
        }

        .mist-2 {
          height: 12px;
          opacity: 0.7;
          animation-delay: 0.3s;
        }

        .mist-3 {
          height: 8px;
          opacity: 0.6;
          animation-delay: 0.6s;
        }

        @keyframes mist {
          0%, 100% { transform: scaleY(1); }
          50% { transform: scaleY(1.5); }
        }

        /* Safety Light Styles */
        .safety-light-container {
          width: 80px;
          height: 80px;
          margin: 0 auto 16px;
          position: relative;
        }

        .safety-pole {
          width: 16px;
          height: 60px;
          background-color: #374151;
          border-radius: 8px;
          margin: 0 auto;
        }

        .safety-light-top {
          position: absolute;
          top: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background-color: #1f2937;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .safety-light-bottom {
          position: absolute;
          top: 50px;
          left: 50%;
          transform: translateX(-50%);
          width: 40px;
          height: 40px;
          background-color: #1f2937;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .safety-bulb {
          width: 30px;
          height: 30px;
          background-color: white;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .bulb-center {
          width: 16px;
          height: 16px;
          background-color: #1f2937;
          border-radius: 50%;
        }

        .safety-base {
          position: absolute;
          bottom: 0;
          left: 50%;
          transform: translateX(-50%);
          width: 24px;
          height: 8px;
          background-color: #4b5563;
          border-radius: 4px;
        }

        @media (max-width: 768px) {
          .container {
            padding: 16px;
            gap: 16px;
          }
          
          .feature-card {
            width: 100%;
            max-width: 300px;
          }
        }
      `}</style>

      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 className="video-text">
          JO:TI Features
        </h2>
        <p style={{ fontSize: '1.125rem', marginTop: '8px' }}>
          Smart Features to help you enjoy your walk and when you cross the road with JO:IT
        </p>
      </div>

      <div className="container">
        {features.map((feature) => (
          <div key={feature.id} className="feature-card">
            <div className="card-content">
              <div className="icon-container">
                <img src={feature.icon} alt={feature.title} className="feature-icon" />
                {/* Add animated custom icons based on feature type */}
                {/* {feature.id === 1 && <TrafficLightIcon />}
                {feature.id === 2 && <ShieldIcon />}
                {feature.id === 3 && <SafetyLightIcon />} */}
              </div>
              
              <h3 className="card-title">
                {feature.title}
              </h3>
              
              <p className="card-description">
                {feature.description}
              </p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default FeatureCards;