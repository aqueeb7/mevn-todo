import { defineStore } from "pinia";
import apiClient from "../services/api";
import { useRouter } from "vue-router";

const router = useRouter();

export const useAuthStore = defineStore('auth', {
  state: () => ({
    token: null,
    isAuthenticated: false
  }),
  actions: {
    setToken(token) {
      this.token = token;
      this.isAuthenticated = true;
    },
    clearToken() {
      this.token = null;
      this.isAuthenticated = false;
    },
    async login(credentials) {
      const response = await apiClient.post('/auth/login', JSON.stringify(credentials));
      console.log(response);
      const token  = response.data.data.token
      this.setToken(token);
      localStorage.setItem('token', token);
      return true;
    }
  }

})