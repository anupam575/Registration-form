import React, { useEffect, useState } from "react";
import "./Home.css"; 
import { fetchPropertyPhotos } from "../api/api";
import CategoryList from "./CategoryList";
import ImageGrid from "./ImageGrid";

const Home = () => {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [images, setImages] = useState([]); 

  useEffect(() => {
    const getData = async () => {
      try {
        const photoData = await fetchPropertyPhotos();
        setImages(photoData);

        const uniqueCategories = [
          ...new Set(photoData.map((img) => img.phototype?.name || "Other")),
        ];
        setCategories(uniqueCategories);
         if (uniqueCategories.length > 0) {
        setSelectedCategory(uniqueCategories[0]);
      }
      } catch (err) {
        console.error("API Error:", err.message);
      }
    };

    getData();
  }, []);

  const handleCategoryClick = (catName) => {
    setSelectedCategory(catName);
  };

  const filteredImages = selectedCategory
    ? images.filter(
        (img) => (img.phototype?.name || "Other") === selectedCategory
      )
    : [];

  return (
    <>
      {}
      <div className="home-container"></div>

      {}
      <div className="home-content">
        <h2>Categories</h2>
        <CategoryList
          categories={categories}
          images={images}
          onClick={handleCategoryClick}
        />

        {selectedCategory && (
          <>
            <h3 style={{ marginTop: "30px" }}>Showing: {selectedCategory}</h3>
            <ImageGrid images={filteredImages} />
          </>
        )}
      </div>
    </>
  );
};

export default Home;
