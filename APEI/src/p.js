// App.js

import React, { useEffect, useState } from "react";

function App() {
  const [Data, SetData] = useState();
  useEffect(() => {
    const apiUrl =
      "https://homestay.kliffhost.in/api/property/16-d-homestay-chandigarh-1";
    const apiKey = "8a6dfc93-e244-40e5-9474-f86a5d3696ff";

    fetch(apiUrl, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "x-api-key": apiKey,
      },
    })
      .then((response) => {
        console.log("👉 Full Response Object:", response); // Raw response
        return response.json(); // Parse JSON
      })
      .then((data) => {
        console.log("👉 Parsed JSON Data:", data.data.result.property_photos); // API का actual data
        SetData(data.data.result.property_photos);
      })
      .catch((error) => {
        console.error("❌ Error Fetching API:", error);
      });
  }, []);

  console.log(Data, "jhadsk");
  return (
    <div>
      <h1>React API Fetch Example</h1>
      <p>Open Developer Console to see response.</p>


      {Data?.map((item,index)=>(
        <div>
        <img src={item.image_url}/>
        <h1>{item.message}</h1>
        </div>
      ))}
    </div>
  );
}
export default App;
