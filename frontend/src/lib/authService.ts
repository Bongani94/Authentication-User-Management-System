import api from './api';

export const authService = {
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),

  register: (data: {first_name: string,
                  last_name: string,
                  phone_number: string,
                  country: string,
                  email: string,
                  password: string,
                  confirm_password: string,
               }) => 
    api.post('/auth/register', data),

  logout: () => api.post('/auth/logout'),
};
