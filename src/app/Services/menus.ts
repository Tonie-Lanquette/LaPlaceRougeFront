import axios from "axios";

export async function getMenus() {
  let axiosConfig = {
    headers: {
      "content-type": "application/json",
    },
  };

  let url = `${process.env.NEXT_PUBLIC_API_URL}api/menu/all`;

  return axios.get(url, axiosConfig).then((res) => {
    return res;
  });
}
