import * as axios from "axios";
import { unfollow } from "../components/redux/usersPageReducer";

const instance = axios.create({
  withCredentials: true,
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  headers: {
    "API-KEY": "6fe7141a-6def-4d0e-b876-914d304516a3",
  },
});

export const usersAPI = {
  getUsers(currentPage = 1, pageSize = 10) {
    return instance
      .get(`users?page=${currentPage}&count=${pageSize}`)
      .then((response) => {
        return response.data;
      });
  },
  follow(userId) {
    return instance.post(`follow/${userId}`);
  },
  unfollow(userId) {
    return instance.delete(`follow/${userId}`);
  },
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
};

export const profileAPI = {
  getProfile(userId) {
    return instance.get(`profile/` + userId);
  },
  getStatus(userId) {
    return instance.get("profile/status/" + userId);
  },
  updateStatus(status) {
    return instance.put("profile/status", { status });
  },
};

export const authAPI = {
  me() {
    return instance.get(`auth/me`);
  },
};
