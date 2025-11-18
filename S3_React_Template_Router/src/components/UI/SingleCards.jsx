import React from "react";

export default function SingleCards({
  imgSRC = "https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp",
  title = "Shoes!",
  bText = "Buy Now",
  isButton = true,
}) {
  // let button = "";
  // if (isButton) {
  //   button = (
  //     <div className="card-actions justify-end">
  //       <button className="btn btn-primary">{bText}</button>
  //     </div>
  //   );
  // }
  return (
    <div className="card bg-base-100 w-96 shadow-xl my-10">
      <figure>
        <img src={imgSRC} alt="Shoes" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
      </div>
      {isButton && (
        <div className="card-actions justify-end">
          <button className="btn btn-primary">{bText}</button>
        </div>
      )}
    </div>
  );
}
