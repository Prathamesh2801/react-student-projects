import React from "react";
import SingleCards from "./SingleCards";
import Fruit1 from '../../assets/img/fruit1.jpg'
import Fruit2 from '../../assets/img/fruit2.jpg'
import Fruit3 from '../../assets/img/fruit3.jpg'

export default function CardsLayout() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3  gap-4  p-5">
      <div className="flex items-center justify-center">
        <SingleCards imgSRC={Fruit1}  title="JackFruit" bText="Learn More"/>
      </div>
      <div className="flex items-center justify-center">
        <SingleCards  imgSRC={Fruit2} title="Blackberry" isButton={false}/>
      </div>
      <div className="flex items-center justify-center">
        <SingleCards imgSRC={Fruit3} title="Strawberry" bText="Explore"/>
      </div>
     
    </div>
  );
}
