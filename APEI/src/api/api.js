
export const API_URL = "https://homestay.kliffhost.in/api/property/16-d-homestay-chandigarh-1";
export const API_KEY = "8a6dfc93-e244-40e5-9474-f86a5d3696ff";

export const fetchPropertyPhotos = async () => {
  const res = await fetch(API_URL, {
    headers: {
      "Content-Type": "application/json",
      "x-api-key": API_KEY,
    },
  });

  const data = await res.json();

  console.log(" API Response:", data);

  return data?.data?.result?.property_photos || [];
};
