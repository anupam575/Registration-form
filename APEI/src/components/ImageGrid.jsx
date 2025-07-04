
import React, { useState, useEffect } from "react";
import "./ImageGrid.css";

const ImageGrid = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (images?.length > 0) {
      setCurrentIndex(0);
    }
  }, [images]);

  if (!images || images.length === 0) {
    return <p className="no-images">No images available</p>;
  }

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const currentImage = images[currentIndex];

  return (
    <div className="image-slider-wrapper">
      <button className="nav-button" onClick={handlePrev}>
        ⬅
      </button>

      {}
      {currentImage?.image_url ? (
        <div className="image-box">
          <img
            src={currentImage.image_url}
            alt={currentImage.phototype?.name || "Image"}
            className="main-image"
          />
          <p className="image-title">{currentImage.phototype?.name || "Other"}</p>
        </div>
      ) : (
        <p className="no-images">Image data invalid</p>
      )}

      <button className="nav-button" onClick={handleNext}>
        ➡
      </button>
    </div>
  );
};

export default ImageGrid;
