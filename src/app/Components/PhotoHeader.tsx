import React from "react";

interface PhotoHeaderProps {
  title: string;
}

export const PhotoHeader = ({ title }: PhotoHeaderProps) => {
  return (
    <div
      className=" bg-cover h-80 relative mb-10"
      style={{
        backgroundImage: `url(images/restaurant.png)`,
      }}
    >
      <img
        src="images/logo.png"
        alt="Logo du restaurant La Place Rouge"
        className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 hidden lg:block"
      />
      <h1 className="absolute bottom-[50px] left-1/2 transform -translate-x-1/2 text-6xl">
        {title}
      </h1>
    </div>
  );
};
