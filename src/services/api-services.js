import axios from "axios";

axios.defaults.baseURL = `https://frontend-test-assignment-api.abz.agency/api/v1/`;

export const fetchAllUsers = async () => {
  const { data } = await axios.get(`users?page=1&count=6`);
  const result = data.users;
  return result;
};

export const fetchPosition = async () => {
  const { data } = await axios.get(`positions`);
  const result = data.positions;
  return result;
};
