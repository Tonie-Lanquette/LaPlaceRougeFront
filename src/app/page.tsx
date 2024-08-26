"use client";

import { useEffect, useState } from "react";
import { getPicturesDishies } from "./Services/dishies";
import { FaMinus, FaPlus } from "react-icons/fa";
import DatePicker, { registerLocale } from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { getMaxNumberPeople, sendBooking } from "./Services/booking";
import toast, { Toaster } from "react-hot-toast";
import { Navbar } from "./Components/Navbar";
import { fr as localeFr } from "date-fns/locale";
import { Locale } from "date-fns";

registerLocale("fr", localeFr as Locale);

export default function Home() {
  const [startDate, setStartDate] = useState(new Date());

  const [pictures, setPictures] = useState([]);

  const [maxNumberPeople, setMaxNumberPeople] = useState(0);
  const [numberPeople, setNumberPeople] = useState(maxNumberPeople);
  const [shift, setShift] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (shift == "day" || shift == "night") {
      if (startDate instanceof Date) {
        let year = startDate.getFullYear();
        let month = startDate.getMonth() + 1;
        let date = startDate.getDate();

        let dateBooking = year + "-" + month + "-" + date;

        let dataDay = {
          date: dateBooking,
          shift: shift,
        };

        getMaxNumberPeople(dataDay).then((res) => {
          setMaxNumberPeople(res.data.numberPeople);
        });
      }
    }
  }, [shift, startDate]);

  useEffect(() => {
    getPicturesDishies().then((res: any) => {
      setPictures(res.data);
    });
  }, []);

  function minusOne() {
    if (numberPeople > 1) {
      setNumberPeople(numberPeople - 1);
    } else {
      setNumberPeople(maxNumberPeople);
    }
  }

  function plusOne() {
    if (numberPeople < maxNumberPeople) {
      setNumberPeople(numberPeople + 1);
    } else {
      setNumberPeople(1);
      toast.error(
        `Il ne reste plus que ` + maxNumberPeople + ` places pour ce jour.`
      );
    }
  }

  function book() {
    let errorMessage = document.querySelector(".errorMessage");

    errorMessage!.innerHTML = "";

    if (shift !== "" && firstname !== "" && lastname !== "" && email !== "") {
      if (startDate instanceof Date) {
        let year = startDate.getFullYear();
        let month = startDate.getMonth() + 1;
        let date = startDate.getDate();

        let dateBooking = year + "-" + month + "-" + date;

        if (numberPeople >= 1 && numberPeople <= maxNumberPeople) {
          if (shift == "day" || shift == "night") {
            if (firstname.length <= 50) {
              if (lastname.length <= 50) {
                if (checkEmail(email)) {
                  let booking = {
                    firstname: firstname,
                    lastname: lastname,
                    date: dateBooking,
                    email: email,
                    shift: shift,
                    numberPeople: numberPeople,
                  };

                  sendBooking(booking).then((res) => {
                    if (res.status === 201) {
                      toast.success(
                        "Votre réservation à été réalisé avec succès."
                      );
                    } else {
                      toast.error(
                        "Une erreur est survenue merci de rééssayer."
                      );
                    }
                  });
                } else {
                  errorMessage!.innerHTML = "Merci de rentrer un email valide.";
                }
              } else {
                errorMessage!.innerHTML =
                  "Votre nom ne doit pas excéder 50 caractères.";
              }
            } else {
              errorMessage!.innerHTML =
                "Votre prénom ne doit pas excéder 50 caractères.";
            }
          } else {
            errorMessage!.innerHTML = "Merci de sélectionner un service.";
          }
        } else {
          errorMessage!.innerHTML =
            "Merci de rentrer un nombre de personnes correct.";
        }
      } else {
        errorMessage!.innerHTML = "Merci de sélectionner une date.";
      }
    } else {
      errorMessage!.innerHTML = "Merci de remplir tous les champs.";
    }
  }

  function checkEmail(email: string) {
    let re =
      /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(email);
  }

  return (
    <main className="">
      <Navbar></Navbar>

      <div
        className=" bg-cover h-80 relative bg-center mb-10"
        style={{
          backgroundImage: `url(images/photoAccueil.jpg)`,
        }}
      >
        <img
          src="images/logo.png"
          alt="Logo du restaurant La Place Rouge"
          className="absolute top-[-60px] left-1/2 transform -translate-x-1/2 hidden lg:block"
        />
      </div>

      <Toaster position="top-right"></Toaster>
      <div className="w-1/2 text-center m-auto text-xl space-y-4">
        <h1 className="text-2xl font-bold">
          Bienvenue à La Place
          <span className="text-[#FF0202] text-2xl">R</span>ouge !
        </h1>
        <p>
          Découvrez la cuisine russe traditionnelle, sublimée par des produits
          frais soigneusement sélectionnés sur les marchés locaux.
        </p>
        <p>
          Chez La Place <span className=" text-[#FF0202]">R</span>ouge, chaque
          plat est une invitation à savourer des saveurs authentiques de la
          Russie. Que ce soit pour un repas convivial, un dîner romantique ou un
          verre entre amis ou collègues, nous créons une ambiance chaleureuse et
          accueillante.
        </p>
        <p>
          À très bientôt à La Place <span className=" text-[#FF0202]">R</span>
          ouge !
        </p>
      </div>

      <div className="flex items-center my-8">
        <button className=" bg-black rounded-lg text-white px-4 py-3 shadow-lg text-xl w-fit m-auto">
          Réserver une table
        </button>
      </div>

      <div className="flex items-center justify-around w-11/12 m-auto">
        {pictures &&
          pictures.map((picture: any) => {
            return (
              <img
                className="w-1/6 h-12 sm:h-16 md:h-20 lg:h-32 object-cover"
                src={picture.picture}
                alt="Image d'un plat"
              />
            );
          })}
      </div>

      {/* Partie Réservation */}

      <section className="my-10">
        <h2 className="text-5xl font-bold text-center mb-5">Réservation</h2>

        <section className="my-4 md:flex justify-center items-center space-x-20">
          {/* Partie gauche */}
          <section className="flex flex-col items-center">
            <p className="rounded-lg px-2 py-1.5 bg-white border-2 border-black text-center mx-3 my-4">
              {startDate.toLocaleDateString()}
            </p>

            <DatePicker
              selected={startDate}
              onChange={(date) => setStartDate(date)}
              inline
              minDate={new Date()}
              locale="fr"
            />
          </section>

          {/* Partie droite */}
          <section className="my-4">
            {/* <section className=""> */}
            <section className="grid grid-cols-1 grid-rows-5 sm:grid-cols-2 sm:grid-rows-3 md:grid-cols-1 md:grid-rows-5 lg:grid-cols-2 lg:grid-rows-3 gap-x-4">
              <div>
                <select
                  name="shift"
                  id="shift"
                  className="px-2 py-1.5 bg-white border-2 border-black rounded-lg h-fit"
                  onChange={(e) => setShift(e.target.value)}
                >
                  <option value="">Séléctionnez un service</option>
                  <option value="day">Midi</option>
                  <option value="night">Soir</option>
                </select>
              </div>
              <div>
                <div className="flex flex-col ">
                  <p className="mb-2 font-bold">Nombre de personnes</p>
                  <div className="flex items-center">
                    <button onClick={minusOne}>
                      <FaMinus size={20} />
                    </button>
                    <p className="w-10 h-10 rounded-full px-2 py-1.5 bg-white border-2 border-black text-center mx-3">
                      {numberPeople}
                    </p>
                    <button onClick={plusOne}>
                      <FaPlus size={20} />
                    </button>
                  </div>
                </div>
              </div>
              <div>
                <div className="flex flex-col w-fit">
                  <label htmlFor="firstname" className="mb-2 font-bold">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="firstname"
                    className="px-2 py-1.5 bg-white border-2 border-black rounded-lg"
                    onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>
              </div>
              <div>
                <div className="flex flex-col w-fit">
                  <label htmlFor="lastname" className="mb-2 font-bold">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="lastname"
                    className="px-2 py-1.5 bg-white border-2 border-black rounded-lg"
                    onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>
              <div className="col-span-1 sm:col-span-2 md:col-span-1 lg:col-span-2">
                <div className="flex flex-col w-fit my-4">
                  <label htmlFor="email" className="mb-2 font-bold">
                    Email
                  </label>
                  <input
                    type="text"
                    name="email"
                    className="px-2 py-1.5 bg-white border-2 border-black rounded-lg"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>
            </section>
          </section>
        </section>

        <div className="errorMessage text-xl text-[#FF0202] text-center"></div>

        <div className="flex items-center my-8">
          <button
            onClick={book}
            className=" bg-black rounded-lg text-white px-8 py-3 shadow-lg text-xl w-fit m-auto"
          >
            Réserver
          </button>
        </div>
      </section>
    </main>
  );
}
