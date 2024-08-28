import axios from "axios";

export async function sendBooking(formulaire: any) {
  console.log(formulaire);

  let url = `${process.env.NEXT_PUBLIC_API_URL}reservation/api/new`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .post(
      url,
      {
        firstname: formulaire.firstname,
        lastname: formulaire.lastname,
        email: formulaire.email,
        date: formulaire.date,
        shift: formulaire.shift,
        numberPeople: formulaire.numberPeople,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    });
}

export async function getMaxNumberPeople(dataDay: any) {
  let url = `${process.env.NEXT_PUBLIC_API_URL}reservation/api/numberPeople`;

  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };
  return axios
    .post(
      url,
      {
        date: dataDay.date,
        shift: dataDay.shift,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    });
}

