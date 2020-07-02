import axios from 'axios';

const api = axios.create({ baseURL: 'http://localhost:3333' });

export interface SessionsPostModel {
  user: {
    id: string;
    name: string;
    email: string;
    avatar: string;
    createdAt: Date;
    updatedAt: Date;
  };
  token: string;
}

export default api;
