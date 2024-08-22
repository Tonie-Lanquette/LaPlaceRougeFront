import React from "react";

type CardProps = {
  img: string;
  title: string;
  description: string;
  price: string;
};
export const Card = ({ img, title, description, price }: CardProps) => {
  return (
    <div className="bg-white max-w-80 text-center pb-4 mb-10 mx-3 lg:mx-5 space-y-4">
      <img src={img} alt={title} className=" max-h-56 m-auto" />
      <h3 className="mx-10 uppercase">{title}</h3>
      <p className="mx-10">{description}</p>
      <p className="mx-10">{price} €</p>
    </div>
  );
};
