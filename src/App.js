import React, { useState, useEffect } from "react";
// import { FaSearch } from "react-icons";

const clintID = `?client_id=${process.env.REACT_APP_ACCESS_KEY}`;
const mainUrl = `https://api.unsplash.com/photos/`;
const searchUrl = `https://api.unsplash.com/search/photos/`;

function App() {
  const [loading, setLoading] = useState(false);
  const [photo, setPhoto] = useState([]);
  const fetchImages = async () => {
    let url;
    url = `${mainUrl}${clintID}`;
    try {
      setLoading(true);
      const response = await fetch(url);
      const data = response.json();
      console.log(data);
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);
  return (
    <div className="App">
      <p>hello world</p>
    </div>
  );
}

export default App;
