import { useRouter } from "next/navigation";
import React from "react";
import { IoClose, IoMenu } from "react-icons/io5";

export const Navbar = () => {
  const { push } = useRouter();

  function openMenu() {
    document.querySelector(".iconeOpen")?.classList.add("hidden");
    document.querySelector(".iconeClose")?.classList.remove("hidden");
    document.querySelector(".menuBurger")?.classList.remove("hidden");
  }

  function closeMenu() {
    document.querySelector(".iconeOpen")?.classList.remove("hidden");
    document.querySelector(".iconeClose")?.classList.add("hidden");
    document.querySelector(".menuBurger")?.classList.add("hidden");
  }

  return (
    <div className="relative">
      <div className="bg-black flex justify-start items-center min-h-20">
        <button
          onClick={() => push(`/`)}
          className="text-white my-2 p-4 ml-12 hover:text-[#FF0202] hidden lg:block"
        >
          Accueil
        </button>
        <button
          onClick={() => push(`/carte`)}
          className="text-white my-2 p-4 ml-4 hover:text-[#FF0202] hidden lg:block"
        >
          La Carte
        </button>
        <button
          onClick={() => push(`/menu`)}
          className="text-white my-2 p-4 ml-4 hover:text-[#FF0202] hidden lg:block"
        >
          Menus
        </button>

        <div className="lg:hidden mx-12 w-full flex justify-between">
          <img
            src="images/logo.png"
            alt="Logo du restaurant La Place Rouge"
            className="max-w-16 "
          />
          <button className="iconeOpen " onClick={() => openMenu()}>
            <IoMenu color="#ffffff" size={60} />
          </button>
          <button className="iconeClose  hidden " onClick={() => closeMenu()}>
            <IoClose color="#ffffff" size={60} />
          </button>
        </div>
      </div>
      <div className="menuBurger hidden bg-black absolute pb-4 z-10 flex flex-col w-full items-center">
        <button
          onClick={() => push(`/`)}
          className="text-white my-2 px-4 py-2 hover:text-[#FF0202] lg:hidden border-y border-black w-fit hover:border-[#ff020288]"
        >
          Accueil
        </button>
        <button
          onClick={() => push(`/carte`)}
          className="text-white my-2 px-4 py-2 hover:text-[#FF0202] lg:hidden border-y border-black w-fit hover:border-[#ff020288]"
        >
          La Carte
        </button>
        <button
          onClick={() => push(`/menu`)}
          className="text-white my-2 px-4 py-2 hover:text-[#FF0202] lg:hidden border-y border-black w-fit hover:border-[#ff020288]"
        >
          Menus
        </button>
      </div>
    </div>
  );
};
