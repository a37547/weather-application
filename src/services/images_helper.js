import fewClouds from "../assets/weather-images/few_clouds.svg";
import clearSky from "../assets/weather-images/clear_sky.svg";
import mist from "../assets/weather-images/mist.svg";
import brokenClouds from "../assets/weather-images/broken_clouds.svg";
import fewRain from "../assets/weather-images/few_rain.svg";
import overcastClouds from "../assets/weather-images/overcast_clouds.svg";
import scatteredClouds from "../assets/weather-images/scattered_clouds.svg";
import showerRain from "../assets/weather-images/shower_rain.svg";
import lightSnow from "../assets/weather-images/lightSnow.svg";

//Existing description and image to show
export const imagesHelper = [
  { description: "few clouds", image: fewClouds },
  { description: "clear sky", image: clearSky },
  { description: "mist", image: mist },
  { description: "broken clouds", image: brokenClouds },
  { description: "snow", image: lightSnow },
  { description: "light intensity shower rain", image: fewRain },
  { description: "overcast clouds", image: overcastClouds },
  { description: "scattered clouds", image: scatteredClouds },
  { description: "shower rain", image: showerRain },
  { description: "light snow", image: lightSnow },
  { description: "moderate rain", image: fewRain },
  { description: "light rain", image: fewRain },
];

//find what image to render, given a description
export function findImage(description) {
  const descriptionObject = imagesHelper.find(
    (d) => d.description === description
  );
  if (!descriptionObject) return null;
  return descriptionObject.image;
}
