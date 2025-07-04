import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './ModalComponent.css';

function ModalComponent({ onClose }) {
  const [selectedCategory, setSelectedCategory] = useState('garden');
  const [images, setImages] = useState({
    garden: [],
    room: [],
    parking: []
  });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(
      'https://homestay.kliffhost.in/api/property/16-d-homestay-chandigarh-1',
      {
        headers: {
          'x-api-key': '8a6dfc93-e244-40e5-9474-f86a5d3696ff'
        }
      }
    )
    .then(res => {
      console.log("✅ API Response:", res.data);

      const apiImages = res.data?.images || {};
      setImages({
        garden: apiImages.garden || [],
        room: apiImages.room || [],
        parking: apiImages.parking || []
      });

      setLoading(false);
    })
    .catch(err => {
      console.error("❌ API Error:", err);
      setError("Failed to fetch images.");
      setLoading(false);
    });
  }, []);

  return (
    <div className="modal-overlay">
      <div className="modal">
        <button className="close-button" onClick={onClose}>X</button>
        <h2>Select Image Category</h2>

        <div className="category-buttons">
          {Object.keys(images).map((cat) => (
            <button
              key={cat}
              className={selectedCategory === cat ? 'active' : ''}
              onClick={() => setSelectedCategory(cat)}
            >
              {cat.charAt(0).toUpperCase() + cat.slice(1)}
            </button>
          ))}
        </div>

        {loading ? (
          <p>Loading images...</p>
        ) : error ? (
          <p className="error">{error}</p>
        ) : images[selectedCategory].length === 0 ? (
          <p>No images found for {selectedCategory}.</p>
        ) : (
          <div className="image-gallery">
            {images[selectedCategory].map((img, i) => (
              <img
                key={i}
                src={img}
                alt={selectedCategory}
                onError={() => console.log("❌ Broken Image URL:", img)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default ModalComponent;
