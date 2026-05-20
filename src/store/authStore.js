import { create } from 'zustand';
import Api from '../Api/Api.js';

export const useAuthStore = create((set) => ({
  user: null,
  loading: false,
  isAuthenticated: false,
  initializing: true,

  Register: async (formData) => {
    try {
      set({
        loading: true
      })
      const res = await Api.post("/auth/register", formData);
      set({
        user: res.data.user,
        isAuthenticated: true,
        loading: false,
      })
      return res.data;

    } catch (error) {
      set({ loading: false });
      throw (error.response?.data || {
        message: error.message
      }
      )
    }
  },

  Login: async (formData) => {
    try {
      set({
        loading: true
      })
      const res = await Api.post("/auth/login", formData);
      set({
        user: res.data.user,
        isAuthenticated: true,
        loading: false,
      })
      return res.data
    } catch (error) {
      set({
        loading: false
      })
      throw (error.response?.data || {
        message: error.message
      })
    }
  },
  getProfile: async () => {
    try {
      set({ loading: true })
      const res = await Api.get("/auth/profile");
      set({
        user: res.data.user,
        isAuthenticated: true,
        loading: false,
        initializing: false
      })
    } catch (error) {
      set({
        user: null,
        isAuthenticated: false,
        loading: false,
        initializing: false
      })
    }
  },

  Logout: async () => {
    try {
      await Api.post("/auth/logout");
      set({
        user: null,
        isAuthenticated: false
      })
    } catch (error) {
      return error.response?.data || {
        message: error.message
      };

    }
  }
}))