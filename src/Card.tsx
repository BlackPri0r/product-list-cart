import React from "react";

function Card({ imageSrc, name, category, price }) {
  return (
    <div className="w-[252px] h-[344px] bg-[#1a1a1a] flex rounded-lg flex-col">
      {/* Image and button */}
      <div className="relative w-[252px] h-[242px] rounded-lg flex flex-col items-center">
        <img className="rounded-md" alt={name} src={imageSrc} />
        <button className="absolute bottom-[-20px] left-1/2 transform -translate-x-1/2 h-11 w-40 rounded-full border border-[#8a8a8a]">
          <p>Add to Cart</p>
        </button>
      </div>

      {/* Bottom text */}
      <div className="text-[14px] mt-5">{name}</div>
      <p className="text-[15px]">{category}</p>
      <p className="text-[15px]">${price.toFixed(2)}</p>
    </div>
  );
}

export default Card;
