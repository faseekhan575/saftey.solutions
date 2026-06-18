import React, { useState, useRef, useEffect } from 'react';

/**
 * LazyImage – renders a lightweight skeleton placeholder and only loads the
 * real image once the element scrolls into view (via IntersectionObserver).
 * After the image loads it fades in smoothly.
 */
function LazyImage({ src, alt, className = '', style = {} }) {
  const [isInView, setIsInView] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const imgRef = useRef(null);

  useEffect(() => {
    const el = imgRef.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: '200px' } // start loading 200px before visible
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div ref={imgRef} className="relative w-full h-full" style={style}>
      {/* Skeleton placeholder */}
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-200 animate-pulse rounded" />
      )}

      {/* Actual image – only set src when in view */}
      {isInView && (
        <img
          src={src}
          alt={alt}
          onLoad={() => setIsLoaded(true)}
          className={`${className} transition-opacity duration-500 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
          // no native loading="lazy" needed; we handle it ourselves
        />
      )}
    </div>
  );
}

export default LazyImage;
