"use client";

import { useEffect, useRef, useState } from "react";

export default function FounderVisual() {
  const [imageAvailable, setImageAvailable] = useState(true);
  const imageRef = useRef(null);

  useEffect(() => {
    if (imageRef.current?.complete && imageRef.current.naturalWidth === 0) {
      setImageAvailable(false);
    }
  }, []);

  return (
    <div className="founder-image-wrap">
      {imageAvailable ? (
        <img
          src="/assets/founder.jpeg"
          alt="Richa Ramola, Founder of Harmony of Cells"
          className="founder-image"
          ref={imageRef}
          onError={() => setImageAvailable(false)}
        />
      ) : (
        <div className="founder-image-placeholder" role="img" aria-label="Founder image unavailable">
          <span>Founder profile</span>
          <strong>Richa Ramola</strong>
        </div>
      )}
      <div className="founder-badge">
        <span>FOUNDER</span>
        <strong>Richa Ramola</strong>
      </div>
    </div>
  );
}
