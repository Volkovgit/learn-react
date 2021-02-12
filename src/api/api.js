import * as axios from "axios";

// const baseURL = "https://social-network.samuraijs.com/api/1.0/"
const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  "API-KEY": "47ff7f0e-a2bb-4bd0-a59e-aa9007130be6",
});

export const getUsers = (currentPage = 1, pageSize = 1) => {
  return instance
    .get(`users?page=${currentPage}&count=${pageSize}`, {
      withCredentials: true,
    })
    .then((responce) => responce.data);
};

export const unfollowAPI = (userId) => {
  return instance
    .delete(`follow/${userId}`, {
      withCredentials: true,
      headers: {
        "API-KEY": "47ff7f0e-a2bb-4bd0-a59e-aa9007130be6",
      },
    })
    .then((responce) => responce.data);
};

export const followAPI = (userId) => {
  return axios
    .post(
      `https://social-network.samuraijs.com/api/1.0/follow/${userId}`,
      {},
      {
        withCredentials: true,
        headers: {
          "API-KEY": "47ff7f0e-a2bb-4bd0-a59e-aa9007130be6",
        },
      }
    )
    .then((responce) => responce.data);
};
