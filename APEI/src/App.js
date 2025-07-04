import React from "react";
import Home from "./components/Home";

function App() {
  return <Home />;
}

export default App;
// import React, { useEffect, useState } from 'react';

// const API_URL = 'https://homestay.kliffhost.in/api/property/16-d-homestay-chandigarh-1'; // 🔁 Replace with your actual API URL
// const API_KEY = '8a6dfc93-e244-40e5-9474-f86a5d3696ff'; // 🔁 Replace with your actual API key

// const FetchDataComponent = () => {
//   const [data, setData] = useState(null);
//   const [error, setError] = useState(null);

//   useEffect(() => {
//     fetch(API_URL, {
//       method: 'GET',
//       headers: {
//         'Content-Type': 'application/json',
//         'x-api-key': API_KEY,
//       },
//     })
//       .then(async (response) => {
//         console.log('Full Response:', response); // ✅ Log raw response

//         const jsonData = await response.json();  // ✅ Await JSON parsing
//         console.log("👉 Parsed JSON Data:", jsonData.data.result.
// property_photos); // ✅ Log parsed data

//         if (!response.ok) {
//           throw new Error(jsonData.message || 'Something went wrong');
//         }

//         setData(jsonData);
//       })
//       .catch((error) => {
//         console.error('Fetch Error:', error);
//         setError(error.message);
//       });
//   }, []);

//   return (
//     <div>
//       <h1>API Response</h1>
//       {error && <p style={{ color: 'red' }}>Error: {error}</p>}
//       {data ? (
//         <pre>{JSON.stringify(data, null, 2)}</pre>
//       ) : (
//         !error && <p>Loading...</p>
//       )}
//     </div>
//   );
// };

// export default FetchDataComponent;

