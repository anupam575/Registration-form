// useEffect(() => {
//     const getData = async () => {
//       try {
//         const photoData = await fetchPropertyPhotos();
//         setImages(photoData);
//         const uniqueCategories = [
//           ...new Set(photoData.map((img) => img.phototype?.name || "Other")),
//         ];



//         setCategories(uniqueCategories);
//          if (uniqueCategories.length > 0) {
//         setSelectedCategory(uniqueCategories[0]);
//       }
//       } catch (err) {
//         console.error("API Error:", err.message);
//       }
//     };

//     getData();
//   }, []);
