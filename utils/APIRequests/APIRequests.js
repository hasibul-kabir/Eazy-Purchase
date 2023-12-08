import client from "./../httpRequests/HTTPClient";

const APIRequests = {
  users: {
    login: (email, password) => {
      const endpoint = "/users/login";
      return client.post(endpoint, { email, password });
    },
    getMe: (token) => {
      const endpoint = "/users/me";
      return client.get(endpoint, {
        headers: { Authorization: `Bearer ${token}` },
      });
    },
  },

  products: {
    getAllProducts: (params) => {
      const endpoint = "/products";
      return client.get(endpoint, { params });
    },
    getProductDetails: (_id) => {
      const endpoint = `/products/${_id}`;
      return client.get(endpoint);
    },
    getPopularProducts: () => {
      const endpoint = "/products/popular-products";
      return client.get(endpoint);
    },
  },

  categories: {
    getAllCategories: () => {
      const endpoint = "/categories";
      return client.get(endpoint);
    },
    getCategory: (_id) => {
      const endpoint = `/categories/${_id}`;
      return client.get(endpoint);
    },
  },
};

export default APIRequests;
