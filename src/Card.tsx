import { useState } from "react";


interface CardProps {
  imageSrc: string;
  name: string;
  category: string;
  price: number;
  addToCart: () => void;
}

function Card({ imageSrc, name, category, price , addToCart}: CardProps) {
  // const [quantity, setQuantity] = useState(0)

  // const increment = () => {
  //   setQuantity(prevQuantity => prevQuantity + 1)
  // };

  // const decrementQuantity = () => {
  //   setQuantity(prevQuantity => (prevQuantity > 0 ? prevQuantity - 1 : 0));
  // };

  // const handleAddToCart = () => {
  //   // Add to cart logic here
  //   addToCart();
  //   increment();
  // };



  return (
    <div className="bg-[#1a1a1a] flex rounded-lg flex-col">
      {/* Image and button */}






      <div className="relative w-[252px] h-[242px] ounded-lg flex flex-col items-center">
        <img className="rounded-md" alt={name} src={imageSrc} />
        <button onClick={addToCart} className="absolute flex items-center bottom-[-20px] left-1/2 transform -translate-x-1/2 h-11 w-40 rounded-full border border-[#8a8a8a]">
            <svg xmlns="http://www.w3.org/2000/svg" width="21" height="20" fill="none" viewBox="0 0 21 20"><g fill="#C73B0F" clip-path="url(#a)"><path d="M6.583 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM15.334 18.75a1.25 1.25 0 1 0 0-2.5 1.25 1.25 0 0 0 0 2.5ZM3.446 1.752a.625.625 0 0 0-.613-.502h-2.5V2.5h1.988l2.4 11.998a.625.625 0 0 0 .612.502h11.25v-1.25H5.847l-.5-2.5h11.238a.625.625 0 0 0 .61-.49l1.417-6.385h-1.28L16.083 10H5.096l-1.65-8.248Z"/><path d="M11.584 3.75v-2.5h-1.25v2.5h-2.5V5h2.5v2.5h1.25V5h2.5V3.75h-2.5Z"/></g><defs><clipPath id="a"><path fill="#fff" d="M.333 0h20v20h-20z"/></clipPath></defs></svg>
            <p className="ml-1">Add to Cart</p>
        </button>
      </div>

      {/* Bottom text */}
      <div className="text-[14px] mt-5">{name}</div>
      <p className="text-[15px]">{category}</p>
      <p className="text-[15px] mb-4">${price.toFixed(2)}</p>
    </div>
  );
}

export default Card;