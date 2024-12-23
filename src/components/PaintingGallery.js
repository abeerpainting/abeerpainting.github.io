import React, { useState } from "react";
import ImageGallery from "react-image-gallery";

const original_height = "700px";
const paintings = [
  {
    original: "water.jpg",
    thumbnail: "water.jpg",
    originalHeight: original_height,
    originalTitle: "Water",
    year: 2024,
  },
  {
    original: "heaven.jpg",
    thumbnail: "heaven.jpg",
    originalHeight: original_height,
    originalTitle: "Heaven",
    year: 2024,
  },
  {
    original: "mountain.jpg",
    thumbnail: "mountain.jpg",
    originalHeight: original_height,
    originalTitle: "Mountain",
    year: 2024,
  },
  {
    original: "flower.jpg",
    thumbnail: "flower.jpg",
    originalHeight: original_height,
    originalTitle: "Flowers",
    year: 2024,
  },
  {
    original: "bay.jpg",
    thumbnail: "bay.jpg",
    originalHeight: original_height,
    originalTitle: "Bay",
    year: 2024,
  },
];

const PaintingGallery = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handleBeforeSlideChange = (nextIndex) => {
    setCurrentSlide(nextIndex);
  };

  return (
    <section className="gallerysection">
      <div className="gallery">
        <h1>
          "{paintings[currentSlide].originalTitle}", {paintings[currentSlide].year}
        </h1>
        <ImageGallery
          items={paintings}
          onBeforeSlide={handleBeforeSlideChange}
        />
      </div>
    </section>
  );
};

export default PaintingGallery;
