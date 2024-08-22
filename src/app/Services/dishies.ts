import axios from "axios";

export async function getPicturesDishies() {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };

  let url = `${process.env.NEXT_PUBLIC_API_URL}api/dish/picture`;

  return axios.get(url, axiosConfig).then((res) => {
    return res;
  });
}

export async function getDishies() {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };

  let url = `${process.env.NEXT_PUBLIC_API_URL}api/dish/all`;

  return axios.get(url, axiosConfig).then((res) => {
    return res;
  });
}
