"use client";
import React, { useEffect, useState } from "react";
import { Card } from "../Components/Card";
import { getDishies } from "../Services/dishies";
import { Navbar } from "../Components/Navbar";
import { PhotoHeader } from "../Components/PhotoHeader";
import Footer from "../Components/Footer";

const Carte = () => {
  const [dishies, setDishies] = useState([]);
  const [entrances, setEntrances] = useState([]);
  const [flats, setFlats] = useState([]);
  const [desserts, setDesserts] = useState([]);

  useEffect(() => {
    getDishies().then((res: any) => {
      console.log("dans la page", res.data);

      setDishies(res.data);
    });
  }, []);

  useEffect(() => {
    const entrance = dishies.filter((dish: any) => dish.categories.id == 1);
    setEntrances(entrance);

    const flat = dishies.filter((dish: any) => dish.categories.id == 2);
    setFlats(flat);

    const dessert = dishies.filter((dish: any) => dish.categories.id == 3);
    setDesserts(dessert);
  }, [dishies]);

  return (
    <main className="font-sans">
      <Navbar></Navbar>
      <PhotoHeader title={"La carte"}></PhotoHeader>

      <section>
        <h2 className="w-full py-5 bg-white text-2xl text-center">Entrée</h2>
        <div className="mx-5 lg:mx-10 flex flex-wrap justify-center entrancesDishies">
          {entrances &&
            entrances.map((dish: any) => {
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
      <section>
        <h2 className="w-full py-5 bg-white text-2xl text-center">Plats</h2>
        <div className="mx-5 lg:mx-10 flex flex-wrap justify-center entrancesDishies">
          {flats &&
            flats.map((dish: any) => {
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
      <section>
        <h2 className="w-full py-5 bg-white text-2xl text-center">Desserts</h2>
        <div className="mx-5 lg:mx-10 flex flex-wrap justify-center entrancesDishies">
          {desserts &&
            desserts.map((dish: any) => {
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
      <Footer></Footer>
    </main>
  );
};

export default Carte;
