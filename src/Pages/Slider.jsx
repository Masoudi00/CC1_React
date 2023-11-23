import React from "react";
import ImageSlider from "../Components/Slider/ImageSlider";
import image1 from "../Components/Slider/Imgs/img1.jpg"
import image2 from "../Components/Slider/Imgs/img2.jpg"
import image3 from "../Components/Slider/Imgs/img3.jpg"
import image4 from "../Components/Slider/Imgs/img4.jpg"
import image5 from "../Components/Slider/Imgs/img5.jpg"

const images = [
  image1,
  image2,
  image3,
  image4,
  image5
];

function Slider() {
  return (
    <div>
      <h1>Slider:</h1>
      <ImageSlider images={images} />
    </div>
  );
}

export default Slider;
