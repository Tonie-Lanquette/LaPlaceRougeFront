"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import { getMenus } from "../Services/menus";
import { Navbar } from "../Components/Navbar";

const Menu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    getMenus().then((res: any) => {
      console.log(res.data);

      setMenus(res.data);
    });
  }, []);
  return (
    <main className="font-sans">
      <Navbar></Navbar>

      {menus &&
        menus.map((Menu: any) => {
          return (
            <section>
              <h2 className="w-full py-5 bg-white text-2xl text-center">
                {Menu.name} {Menu.price} euros
              </h2>
              <div className="mx-5 lg:mx-10 flex flex-wrap justify-center entrancesDishies">
                {Menu.dish &&
                  Menu.dish.map((dish: any) => {
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
    </main>
  );
};

export default Menu;
