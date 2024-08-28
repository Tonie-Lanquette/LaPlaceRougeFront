"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import { getMenus } from "../Services/menus";
import { Navbar } from "../Components/Navbar";
import { PhotoHeader } from "../Components/PhotoHeader";
import Footer from "../Components/Footer";

const Menu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus().then((res: any) => {
      setMenus(res.data);
    });
  }, []);

  return (
    <main className="font-sans">
      <Navbar></Navbar>
      <PhotoHeader title={"Menus"}></PhotoHeader>

      {menus &&
        menus.map((Menu: any) => {
          return (
            <section>
              <h2 className="w-full py-5 bg-white text-2xl text-center">
                {Menu.name} {Menu.price} euros
              </h2>
              <div className="mx-5 lg:mx-10 flex flex-wrap justify-center entrancesDishies">
                {Menu.dishies &&
                  Menu.dishies.map((dish: any) => {
                    return (
                      <Card
                        img={dish.picture}
                        title={dish.title}
                        description={dish.description}
                        price={dish.price}
                      ></Card>
                    );
                  })}
              </div>
            </section>
          );
        })}
      <Footer></Footer>
    </main>
  );
};

export default Menu;
