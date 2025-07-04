import React from "react";
import "./ImageCard.css";

const ImageCard = ({ image }) => {
  console.log(" ImageCard received:", image); 

  if (!image || !image.image_url) {
    return <p className="image-card-error">Image not available</p>;
  }

  return (
    <div className="image-card">
      <img
        src={image.image_url}
        alt={image.phototype?.name || "Image"}
        className="image-card-img"
      />
      <p className="image-card-title">
        {image.phototype?.name || "Other"}
      </p>
    </div>
  );
};

export default ImageCard;
