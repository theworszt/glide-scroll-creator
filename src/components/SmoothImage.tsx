
import React, { useState, useEffect } from 'react';

interface SmoothImageProps {
  src: string;
  alt: string;
  className?: string;
}

const SmoothImage: React.FC<SmoothImageProps> = ({ src, alt, className }) => {
  const [loaded, setLoaded] = useState(false);
  const [blurredSrc, setBlurredSrc] = useState('');

  useEffect(() => {
    // Reset states when src changes
    setLoaded(false);
    setBlurredSrc('');
    
    // Create a tiny version for the blur effect
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setBlurredSrc(src);
    };
  }, [src]);

  return (
    <div className="blur-image-container relative overflow-hidden w-full h-full">
      {blurredSrc && (
        <div 
          className={`blur-image-placeholder absolute inset-0 filter blur-xl transform scale-110 opacity-100 transition-opacity duration-400 ${loaded ? 'opacity-0' : ''}`} 
          style={{ backgroundImage: `url(${blurredSrc})` }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`blur-image w-full h-full object-cover transition-opacity duration-400 ${loaded ? 'opacity-100' : 'opacity-0'} ${className || ''}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default SmoothImage;
