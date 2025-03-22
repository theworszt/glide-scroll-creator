
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
    // Create a tiny version for the blur effect
    const img = new Image();
    img.src = src;
    img.onload = () => {
      setBlurredSrc(src);
    };
  }, [src]);

  return (
    <div className="blur-image-container">
      {blurredSrc && (
        <div 
          className={`blur-image-placeholder ${loaded ? 'loaded' : ''}`} 
          style={{ backgroundImage: `url(${blurredSrc})` }}
        />
      )}
      <img
        src={src}
        alt={alt}
        className={`blur-image ${loaded ? 'loaded' : ''} ${className}`}
        onLoad={() => setLoaded(true)}
      />
    </div>
  );
};

export default SmoothImage;
