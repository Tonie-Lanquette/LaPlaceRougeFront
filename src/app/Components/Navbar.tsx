import React from "react";

export const Navbar = () => {
    // <meta name="viewport" content="width=device-width, initial-scale=1.0">
    return (
        <div>
          
            <div className="bg-black flex justify-start items-center">
                <button className="text-white my-4 p-4 ml-12 hover:text-[#FF0202]">
                    Accueil
                </button>
                <button className="text-white my-4 p-4 ml-4 hover:text-[#FF0202]">
                    La Carte
                </button>
                <button className="text-white my-4 p-4 ml-4 hover:text-[#FF0202]">
                    Menus
                </button>
            </div>

            <div className="relative h-64">
                <img 
                    src="images/restaurant.png" 
                    alt="Description de l'image" 
                    className="w-full h-43 object-cover object-center"
                />
                <img 
                    src="images/logo.png" 
                    alt="Logo du restaurant" 
                    className="absolute top-[-78px] left-1/2 transform -translate-x-1/2 z-10"/>
              <h1 className="absolute bottom-[-100px] left-1/2 transform -translate-x-1/2 text-black text-5xl z-20">
                    La Carte
                </h1>
                
            </div>
        </div>
    );
{/* </meta> */}
};
