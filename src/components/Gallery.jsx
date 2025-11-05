import React, { useRef } from "react";
import "./Gallery.css";

const Gallery = () => {
  const scrollRef = useRef(null);

  const images = [
    "/images/room.png",
    "/images/sample.png",
    "/images/room.png",
    "/images/sample.png",
    "/images/room.png",
  ];

  const scroll = (direction) => {
    const { current } = scrollRef;
    const scrollAmount = 400; // pixels per click
    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="carousel-section" id="gallery">
      <h2 className="carousel-title"> Gallery</h2>

      <div className="carousel-container">
        <button className="carousel-btn left" onClick={() => scroll("left")}>
          &#10094;
        </button>

        <div className="carousel-images" ref={scrollRef}>
          {images.map((src, index) => (
            <div className="carousel-item" key={index}>
              <img src={src} alt={`Gallery ${index + 1}`} />
            </div>
          ))}
        </div>

        <button className="carousel-btn right" onClick={() => scroll("right")}>
          &#10095;
        </button>
      </div>
    </section>
  );
};

export default Gallery;
