// used when clicking on add to cart
export const authCheck = {
  methods: {
    isAuthenticated() {
      const token = localStorage.getItem("auth_token");

      return token !== null;
    },
    saveAuthToken(token) {
      localStorage.setItem("auth_token", token);
    },
    getToken() {
      return localStorage.getItem("auth_token");
    },
  },
};
