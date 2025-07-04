import React from "react";
import "./CategoryList.css"; 

function CategoryList({ categories, images, onClick }) {
  return (
    <div className="category-scroll-box"> {}
      <div className="category-list">
        {categories.map((catName) => {
          const firstImage = images.find(
            (img) => (img.phototype?.name || "Other") === catName
          );

          if (!firstImage) return null;

          return (
            <div
              key={catName}
              onClick={() => onClick(catName)}
              className="category-card"
              onMouseEnter={(e) =>
                (e.currentTarget.style.transform = "scale(1.03)")
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.transform = "scale(1)")
              }
            >
              <img
                src={firstImage.image_url}
                alt={catName}
                className="category-img"
              />
              <div className="category-label">
                <p className="category-title">{catName}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoryList;
