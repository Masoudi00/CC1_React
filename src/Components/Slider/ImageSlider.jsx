import React, { useState } from "react";
import "./ImageSlider.css"; 
import Prev from "./icons/left-arrow.svg"
import Next from "./icons/right-arrow.svg"


const ImageSlider = ({ images }) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((currentImageIndex + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      currentImageIndex === 0 ? images.length - 1 : currentImageIndex - 1
    );
  };

  return (
    <div className="image-slider">
      <button onClick={prevImage}>Prev<img src={Prev} alt="Slider" /></button><br/>
      <img src={images[currentImageIndex]} alt="Slider" />
      <button onClick={nextImage}>Next<img src={Next} alt="Slider" /></button>
    </div>
  );
};

export default ImageSlider;
