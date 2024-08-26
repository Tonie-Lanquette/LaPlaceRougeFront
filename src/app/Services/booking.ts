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
        date: formulaire.dateBooking,
        number_people: formulaire.numberPeople,
        shift: formulaire.shift,
        firstname: formulaire.firstname,
        lastname: formulaire.lastname,
        email: formulaire.email,
      },
      axiosConfig
    )
    .then((res) => {
      return res;
    });
}
