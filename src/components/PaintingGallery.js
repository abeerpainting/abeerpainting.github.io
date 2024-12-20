import React from "react";
import ImageGallery from "react-image-gallery";

const original_height = "700px"
const paintings = [
  {
    original: "water.jpg",
    thumbnail: "water.jpg",
    originalHeight: original_height,
  },
  {
    original: "heaven.jpg",
    thumbnail: "heaven.jpg",
    originalHeight: original_height,
  },
  {
    original: "mountain.jpg",
    thumbnail: "mountain.jpg",
    originalHeight: original_height,
    
  },
  {
    original: "flower.jpg",
    thumbnail: "flower.jpg",
    originalHeight: original_height,
    
  },
  {
    original: "bay.jpg",
    thumbnail: "bay.jpg",
    originalHeight: original_height,
    
  },

];

const PaintingGallery = () => {
  return (
    <section className="gallerysection">
      <div className="gallery">
        <ImageGallery items={paintings}/>
      </div>
    </section>
  );
};



export default PaintingGallery;
