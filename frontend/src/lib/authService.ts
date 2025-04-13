import api from './api';

export const authService = {
  login: (data: { email: string; password: string }) =>
    api.post('/auth/login', data),

  register: (data: {first_name: string,
                  last_name: string,
                  phone_number: string,
                  country: string,
                  profile_picture?: string,
                  role: string,
                  email: string,
                  password: string,
                  confirm_password: string,
                  terms_and_conditions: boolean,
                  created_at?: string,
                  updated_at?: string }) => 
    api.post('/auth/register', data),

  logout: () => api.post('/auth/logout'),
};
