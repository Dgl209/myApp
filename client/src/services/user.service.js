import httpService from './http.service';
import { getUserId } from './localStorage.service';

const userEndpoint = 'users/';

const userService = {
  get: async () => {
    const { data } = await httpService.get(userEndpoint);
    return data;
  },
  create: async (payload) => {
    const { data } = await httpService.put(userEndpoint + payload.id, payload);
    console.log('data: ', data);
    return data;
  },
  getCurrentUser: async () => {
    const { data } = await httpService.get(userEndpoint + getUserId());
    return data;
  },
};

export default userService;
