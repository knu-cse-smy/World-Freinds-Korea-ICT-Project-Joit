import React from "react";
import "../pages/Home.css"
import { useState } from "react";
import logo from "../assets/logo.svg";

// Custom SVG Icons (replacing lucide-react)
const PlayIcon = ({ className = "w-5 h-5", fill = "currentColor" }) => (
  <svg className={className} fill={fill} viewBox="0 0 24 24">
    <path d="M8 5v14l11-7z"/>
  </svg>
);

const XIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export default function VideoSection() {
  const [videoUrl, setvideoUrl] = useState("");
  const [title, setTitle] = useState("");
  const [desc, setDesc] = useState("");

  // Inline styles untuk memastikan grid bekerja dengan baik
  const containerStyles = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
    width: '100%',
    padding: '24px',
    backgroundColor: '#f9fafb',
    minHeight: '100vh'
  };

  const gridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(4, 1fr)',
    gap: '24px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const mobileGridStyles = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
    gap: '24px',
    width: '100%',
    maxWidth: '1200px',
    margin: '0 auto'
  };

  const cardStyles = {
    backgroundColor: 'white',
    borderRadius: '12px',
    boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s ease',
    width: '100%'
  };

  // Font styles object untuk React inline styles
  const fontStyles = {
    heading: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontWeight: 700,
      letterSpacing: '-0.025em',
      fontSize: '2rem',
      color: '#1f2937',
      marginBottom: '16px'
    },
    title: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontWeight: 600,
      letterSpacing: '-0.015em',
      fontSize: '1.125rem',
      color: '#1f2937',
      marginBottom: '8px',
      lineHeight: '1.4'
    },
    body: {
      fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif',
      fontWeight: 400,
      lineHeight: 1.6,
      fontSize: '0.875rem',
      color: '#6b7280'
    }
  };

  const getYoutubeId = (url) => {
    const m = url.match(/(?:v=|youtu\.be\/|embed\/)([a-zA-Z0-9_-]+)/);
    return m ? m[1] : null;
  };

  // Convert YouTube URL to embed format
  const toembed = (url) => {
    const id = getYoutubeId(url);
    return id ? `https://www.youtube.com/embed/${id}` : "";
  };

  // Extract YouTube video ID from URL (enhanced version)
  const extractYouTubeId = (url) => {
    if (!url) return null;
    
    const patterns = [
      /(?:youtube\.com\/watch\?v=|youtu\.be\/|youtube\.com\/embed\/)([a-zA-Z0-9_-]{11})/,
      /youtube\.com\/v\/([a-zA-Z0-9_-]{11})/
    ];
    
    for (let pattern of patterns) {
      const match = url.match(pattern);
      if (match && match[1]) {
        return match[1];
      }
    }
    return null;
  };

  // Generate thumbnail URL from YouTube video ID
  const getThumbnailUrl = (url) => {
    const youtubeId = getYoutubeId(url);
    if (youtubeId) {
      // Use YouTube's high quality thumbnail
      return `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
    }
    return '/storage/default.png'; // fallback image
  };

  // Handle direct YouTube link opening
  const openYouTubeVideo = (url) => {
    window.open(url, '_blank');
  };

  const openWith = (url, t, d) => {
    setvideoUrl(toembed(url));
    setTitle(t);
    setDesc(d);
  };

  // Enhanced video data with real YouTube URLs
  const videoDummy = [
    {
      url_video: "https://youtu.be/cfO9n4CCyrY?si=2rnR-7xH4d43_vcF",
      title: "Safety Road Song for Kids",
      desc: "Keep your kids safe while happily learning about road safety with this fun song!"
    },
    {
      url_video: "https://youtu.be/CH5kX9vBnKU?si=SMYkgkYOz0kzmo3m",
      title: "Step-by-Step Guide to cross the road safely",
      desc: "Crossing the road can be dangerous, but with this step-by-step guide to keep you safe"
    },
    {
      url_video: "https://youtu.be/konqbVET-PI?si=eGKvPD_q1MjnKV4C",
      title: "Street Safety Song",
      desc: "Know how to safely cross the street with this fun and educational song!"
    },
    {
      url_video: "https://youtu.be/b-9vBtwrBwM?si=9UuYGfVDsDnxyylP",
      title: "How do Traffic Lights Work?",
      desc: "Know how traffic lights work!"
    },
    {
      url_video: "https://youtu.be/JCYr50IRnxc?si=LVm6ZjooK2HXbLHB",
      title: "How Do Traffic Lights Know When to Switch Signals?",
      desc: "When do the traffic lights switch signals? How do they know when to change? Check it out here!"
    },
    {
      url_video: "https://youtu.be/KxrfkcDAgsY?si=eftxrxbek4UIAXu3",
      title: "How to Understand Traffic Signs?",
      desc: "Learn your traffic signs with fun and educational videos!"
    },
    {
      url_video: "https://youtu.be/zDNYSZ1vfpc?si=LGCOo19LV5wHnn5J",
      title: "Types of Traffic Signal Intersections: Understanding Traffic Lights Intersection",
      desc: "Understand traffic light intersections to be safe on the road!"
    },
    {
      url_video: "https://youtu.be/adnfx07A264?si=0fwktWCac4PsLuzP",
      title: "What are Road Signs, Signals, and Markings?",
      desc: "Learn about road signs, signals, and markings to be safe on the road!"
    }
  ];

  return (
    <div style={containerStyles}>
      {/* Header Section */}
      <div style={{ textAlign: 'center', marginBottom: '48px' }}>
        <h2 style={fontStyles.heading} class="video-text">
          Enjoy our Featured Video
        </h2>
        <p style={{ ...fontStyles.body, fontSize: '1.125rem', marginTop: '8px' }}>
          Enjoy your waiting time with our provided Videos on Youtube!
        </p>
      </div>

      {/* Grid Video Layout - Forced 2x4 Grid */}
      <div style={window.innerWidth >= 768 ? gridStyles : mobileGridStyles}>
        {videoDummy.map((item, idx) => {
          const videoId = getYoutubeId(item.url_video);
          const thumbnailUrl = getThumbnailUrl(item.url_video);

          return (
            <div 
              key={idx}
              style={cardStyles}
              onClick={() => openYouTubeVideo(item.url_video)}
              onMouseEnter={(e) => {
                e.target.style.transform = 'scale(1.05)';
                e.target.style.boxShadow = '0 10px 25px -3px rgba(0, 0, 0, 0.1)';
              }}
              onMouseLeave={(e) => {
                e.target.style.transform = 'scale(1)';
                e.target.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
              }}
            >
              {/* Video Thumbnail */}
              <div style={{ 
                position: 'relative', 
                width: '100%', 
                paddingTop: '56.25%', /* 16:9 Aspect Ratio */
                backgroundColor: '#e5e7eb',
                overflow: 'hidden'
              }}>
                <img
                  src={thumbnailUrl}
                  alt={item.title}
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }}
                  onError={(e) => {
                    if (e.target.src.includes('hqdefault')) {
                      e.target.src = `https://img.youtube.com/vi/${videoId}/maxresdefault.jpg`;
                    } else if (e.target.src.includes('maxresdefault')) {
                      e.target.src = `https://img.youtube.com/vi/${videoId}/sddefault.jpg`;
                    } else {
                      e.target.src = '/storage/default.png';
                    }
                  }}
                />
                
                {/* Play Button Overlay */}
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  borderRadius: '50%',
                  padding: '12px',
                  boxShadow: '0 4px 12px rgba(0, 0, 0, 0.3)',
                  cursor: 'pointer'
                }}>
                  <PlayIcon style={{ width: '20px', height: '20px' }} fill="white" />
                </div>

                {/* YouTube Badge */}
                <div style={{
                  position: 'absolute',
                  bottom: '8px',
                  right: '8px',
                  backgroundColor: '#dc2626',
                  color: 'white',
                  padding: '4px 8px',
                  borderRadius: '4px',
                  fontSize: '12px',
                  fontWeight: 600
                }}>
                  YouTube
                </div>
              </div>

              {/* Content */}
              <div style={{ padding: '16px' }}>
                <h3 style={{
                  ...fontStyles.title,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  minHeight: '2.5rem'
                }}>
                  {item.title}
                </h3>
                <p style={{
                  ...fontStyles.body,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                  marginTop: '8px'
                }}>
                  {item.desc}
                </p>
                
                {/* External Link Indicator */}
                <div style={{
                  marginTop: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  fontSize: '12px',
                  color: '#9ca3af'
                }}>
                  <svg style={{ width: '12px', height: '12px', marginRight: '4px' }} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                  </svg>
                  Click to watch on YouTube
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Empty State */}
      {videoDummy.length === 0 && (
        <div style={{ textAlign: 'center', padding: '48px' }}>
          <div style={{ color: '#9ca3af', marginBottom: '8px' }}>
            <PlayIcon style={{ width: '64px', height: '64px', margin: '0 auto', opacity: 0.5 }} />
          </div>
          <p style={{ ...fontStyles.title, color: '#6b7280' }}>
            No videos available
          </p>
          <p style={{ ...fontStyles.body, color: '#9ca3af' }}>
            Check back later for new content
          </p>
        </div>
      )}
    </div>
  );
}